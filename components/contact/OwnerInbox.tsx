import type { ContactMessage, Referral } from "@/lib/supabase/types";
import { Card } from "@/components/ui/Card";

export function OwnerInbox({
  messages,
  referrals,
}: {
  messages: ContactMessage[];
  referrals: Referral[];
}) {
  if (messages.length === 0 && referrals.length === 0) {
    return (
      <p className="text-sm text-muted">No new messages or referrals in your inbox yet.</p>
    );
  }

  return (
    <div className="space-y-6">
      {messages.length > 0 && (
        <div>
          <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
            Messages ({messages.length})
          </h4>
          <div className="max-h-64 space-y-3 overflow-y-auto hide-scrollbar">
            {messages.map((m) => (
              <Card key={m.id} className="p-4">
                <div className="mb-1 flex items-center justify-between gap-2">
                  <p className="font-medium text-foreground">{m.name}</p>
                  <time className="font-mono text-xs text-muted">
                    {new Date(m.created_at).toLocaleDateString()}
                  </time>
                </div>
                <p className="font-mono text-xs text-accent">{m.email}</p>
                <p className="mt-2 text-sm text-muted">{m.body}</p>
              </Card>
            ))}
          </div>
        </div>
      )}

      {referrals.length > 0 && (
        <div>
          <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
            Referrals ({referrals.length})
          </h4>
          <div className="max-h-64 space-y-3 overflow-y-auto hide-scrollbar">
            {referrals.map((r) => (
              <Card key={r.id} className="p-4">
                <div className="mb-1 flex items-center justify-between gap-2">
                  <p className="font-medium text-foreground">{r.name}</p>
                  <time className="font-mono text-xs text-muted">
                    {new Date(r.created_at).toLocaleDateString()}
                  </time>
                </div>
                <p className="font-mono text-xs text-accent">{r.email}</p>
                {(r.company || r.role) && (
                  <p className="mt-1 text-xs text-muted">
                    {[r.company, r.role].filter(Boolean).join(" · ")}
                  </p>
                )}
                <p className="mt-2 text-sm text-muted">{r.body}</p>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
