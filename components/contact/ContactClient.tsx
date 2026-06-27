"use client";

import { useRouter } from "next/navigation";
import { AuthButton } from "./AuthButton";
import { GuestbookForm } from "./GuestbookForm";
import { GuestbookList } from "./GuestbookList";
import { MessageForm } from "./MessageForm";
import { ConnectLinks } from "./ConnectLinks";
import type { GuestbookEntry } from "@/lib/supabase/types";
import type { User } from "@supabase/supabase-js";

export function ContactClient({
  user,
  entries,
  supabaseConfigured,
  isOwner = false,
}: {
  user: User | null;
  entries: GuestbookEntry[];
  supabaseConfigured: boolean;
  isOwner?: boolean;
}) {
  const router = useRouter();

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
      {/* Left column - message + comments */}
      <div className="space-y-8">
        <MessageForm supabaseConfigured={supabaseConfigured} />

        {/* Comments / guestbook */}
        <div className="rounded-2xl border border-border bg-[var(--card-bg)] p-6 backdrop-blur-sm md:p-8">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Comments {isOwner && <span className="text-accent">· moderating</span>}
              </h3>
              <p className="text-sm text-muted">
                Leave a public note about my work - shown after I approve it.
              </p>
            </div>
          </div>

          {!supabaseConfigured ? (
            <p className="rounded-xl border border-border bg-surface/40 p-4 text-sm text-muted">
              Comments are powered by Supabase. Add{" "}
              <code className="text-accent">NEXT_PUBLIC_SUPABASE_URL</code> and{" "}
              <code className="text-accent">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> to{" "}
              <code className="text-accent">.env.local</code> (and run the SQL
              migrations) to enable sign-in and moderated comments.
            </p>
          ) : (
            <>
              <div className="mb-5">
                <AuthButton user={user} />
              </div>
              {user ? (
                <div className="mb-6">
                  <GuestbookForm user={user} onSuccess={() => router.refresh()} />
                </div>
              ) : (
                <p className="mb-6 text-sm text-muted">
                  Sign in with GitHub or Google to leave a comment.
                </p>
              )}
              <GuestbookList initialEntries={entries} isOwner={isOwner} />
            </>
          )}
        </div>
      </div>

      {/* Right column - connect */}
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <ConnectLinks />
      </aside>
    </div>
  );
}
