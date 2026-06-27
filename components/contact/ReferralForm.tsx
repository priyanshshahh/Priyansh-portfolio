"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/data/site";

export function ReferralForm({ supabaseConfigured }: { supabaseConfigured: boolean }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!body.trim()) return;

    if (!supabaseConfigured) {
      const subject = encodeURIComponent(`Portfolio referral from ${name || "a visitor"}`);
      const text = encodeURIComponent(
        `${body}\n\nCompany: ${company || "n/a"}\nRole: ${role || "n/a"}\n\n - ${name || "Anonymous"}${email ? ` (${email})` : ""}`,
      );
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${text}`;
      setSent(true);
      return;
    }

    setLoading(true);
    setError(null);
    const supabase = createClient();
    const { error: insertError } = await supabase.from("referrals").insert({
      name: name.trim() || "Anonymous",
      email: email.trim(),
      company: company.trim() || null,
      role: role.trim() || null,
      body: body.trim(),
    });
    setLoading(false);

    if (insertError) {
      setError(insertError.message);
      return;
    }

    setSent(true);
    setName("");
    setEmail("");
    setCompany("");
    setRole("");
    setBody("");
  };

  if (sent) {
    return (
      <div className="rounded-xl border border-accent/30 bg-accent/[0.06] p-4">
        <p className="text-sm text-foreground">
          Referral received. Thank you for thinking of me.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-2 font-mono text-xs text-accent hover:underline"
        >
          Submit another →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-sm text-muted">
        Know a role or team I should talk to? Send a referral and I will follow up.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted">
            Your name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={120}
            placeholder="Who is referring"
            className="w-full rounded-xl border border-border bg-surface/50 px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted">
            Your email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength={200}
            placeholder="so I can reply"
            required={supabaseConfigured}
            className="w-full rounded-xl border border-border bg-surface/50 px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted">
            Company
          </label>
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            maxLength={200}
            placeholder="Where is the opportunity"
            className="w-full rounded-xl border border-border bg-surface/50 px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted">
            Role
          </label>
          <input
            value={role}
            onChange={(e) => setRole(e.target.value)}
            maxLength={200}
            placeholder="Title or team"
            className="w-full rounded-xl border border-border bg-surface/50 px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted">
          Details
        </label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          maxLength={2000}
          rows={4}
          placeholder="Context, link, or why this is a fit"
          className="w-full rounded-xl border border-border bg-surface/50 px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
        />
        <p className="mt-1 text-right font-mono text-xs text-muted">{body.length}/2000</p>
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <Button type="submit" disabled={loading || !body.trim()}>
        {loading ? "Sending..." : "Send Referral →"}
      </Button>
    </form>
  );
}
