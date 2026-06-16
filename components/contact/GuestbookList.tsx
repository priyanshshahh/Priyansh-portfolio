"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { GuestbookEntry } from "@/lib/supabase/types";
import { Card } from "@/components/ui/Card";

export function GuestbookList({
  initialEntries,
  isOwner = false,
}: {
  initialEntries: GuestbookEntry[];
  isOwner?: boolean;
}) {
  const [entries, setEntries] = useState(initialEntries);

  useEffect(() => {
    const supabase = createClient();
    const channel = supabase
      .channel("guestbook")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "guestbook" },
        (payload) => {
          if (payload.eventType === "INSERT") {
            const row = payload.new as GuestbookEntry;
            // Only surface pending rows to the owner.
            if (row.approved || isOwner) {
              setEntries((prev) =>
                prev.some((e) => e.id === row.id) ? prev : [row, ...prev],
              );
            }
          } else if (payload.eventType === "UPDATE") {
            const row = payload.new as GuestbookEntry;
            setEntries((prev) => prev.map((e) => (e.id === row.id ? row : e)));
          }
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [isOwner]);

  const approve = async (id: string) => {
    const supabase = createClient();
    const { error } = await supabase
      .from("guestbook")
      .update({ approved: true })
      .eq("id", id);
    if (!error) {
      setEntries((prev) =>
        prev.map((e) => (e.id === id ? { ...e, approved: true } : e)),
      );
    }
  };

  // Public sees only approved; owner sees all.
  const visible = isOwner ? entries : entries.filter((e) => e.approved);

  if (visible.length === 0) {
    return (
      <p className="py-8 text-center text-muted">
        No comments yet. Be the first to leave one!
      </p>
    );
  }

  return (
    <div className="max-h-[28rem] space-y-3 overflow-y-auto hide-scrollbar">
      {visible.map((entry) => (
        <Card key={entry.id} className="p-4">
          <div className="mb-2 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <p className="font-medium text-foreground">{entry.display_name}</p>
              {!entry.approved && (
                <span className="rounded-full bg-amber-500/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-amber-500">
                  Pending
                </span>
              )}
            </div>
            <time className="font-mono text-xs text-muted">
              {new Date(entry.created_at).toLocaleDateString(undefined, {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>
          <p className="text-sm leading-relaxed text-muted">{entry.message}</p>
          {isOwner && !entry.approved && (
            <button
              onClick={() => approve(entry.id)}
              className="mt-3 rounded-lg bg-accent px-3 py-1.5 font-mono text-xs font-medium text-background transition-opacity hover:opacity-90"
            >
              ✓ Approve
            </button>
          )}
        </Card>
      ))}
    </div>
  );
}
