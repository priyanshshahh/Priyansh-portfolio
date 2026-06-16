"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/Button";
import type { User } from "@supabase/supabase-js";

export function GuestbookForm({
  user,
  onSuccess,
}: {
  user: User;
  onSuccess?: () => void;
}) {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const displayName =
    user.user_metadata?.full_name ||
    user.user_metadata?.name ||
    user.email?.split("@")[0] ||
    "Anonymous";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error: insertError } = await supabase.from("guestbook").insert({
      user_id: user.id,
      display_name: displayName,
      message: message.trim(),
    });

    setLoading(false);

    if (insertError) {
      setError(insertError.message);
      return;
    }

    setMessage("");
    setSubmitted(true);
    onSuccess?.();
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-accent/30 bg-accent/[0.06] p-4">
        <p className="text-sm text-foreground">
          Thanks for the comment! It&apos;s pending review and will appear publicly
          once Priyansh approves it.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-2 font-mono text-xs text-accent hover:underline"
        >
          Leave another →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-2 block text-sm text-muted">Your message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={500}
          rows={4}
          placeholder="Leave a trace..."
          className="w-full rounded-xl border border-border bg-surface/50 px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
        />
        <p className="mt-1 text-right font-mono text-xs text-muted">
          {message.length}/500
        </p>
      </div>
      {error && <p className="text-sm text-red-400">{error}</p>}
      <Button type="submit" disabled={loading || !message.trim()}>
        {loading ? "Posting..." : "Leave a Trace"}
      </Button>
    </form>
  );
}
