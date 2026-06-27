"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/data/site";

export function MessageForm({ supabaseConfigured }: { supabaseConfigured: boolean }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!body.trim()) return;

    // No backend configured → open the visitor's mail client instead.
    if (!supabaseConfigured) {
      const subject = encodeURIComponent(`Portfolio message from ${name || "a visitor"}`);
      const bodyText = encodeURIComponent(`${body}\n\n - ${name || "Anonymous"}${email ? ` (${email})` : ""}`);
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${bodyText}`;
      setSent(true);
      return;
    }

    setLoading(true);
    setError(null);
    const supabase = createClient();
    const { error: insertError } = await supabase.from("messages").insert({
      name: name.trim() || "Anonymous",
      email: email.trim(),
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
    setBody("");
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-border bg-[var(--card-bg)] p-8 text-center backdrop-blur-sm">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent text-xl">
          ✓
        </div>
        <h3 className="text-lg font-semibold text-foreground">Message sent</h3>
        <p className="mt-1 text-sm text-muted">
          Thanks for reaching out - I&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-4 font-mono text-xs text-accent hover:underline"
        >
          Send another →
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-[var(--card-bg)] p-6 backdrop-blur-sm md:p-8"
    >
      <h3 className="font-mono text-lg font-semibold text-foreground">
        Get in Touch
      </h3>
      <p className="mt-1 text-sm text-muted">
        Send me a message directly - collaborations, roles, or just to say hi.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted">
            Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={120}
            placeholder="Your secret identity"
            className="w-full rounded-xl border border-border bg-surface/50 px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength={200}
            placeholder="so I can reply"
            className="w-full rounded-xl border border-border bg-surface/50 px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted">
          Message
        </label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          maxLength={2000}
          rows={5}
          placeholder="Your message goes here. Ask me anything 👀"
          className="w-full rounded-xl border border-border bg-surface/50 px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
        />
        <p className="mt-1 text-right font-mono text-xs text-muted">{body.length}/2000</p>
      </div>

      {error && <p className="mt-2 text-sm text-red-400">{error}</p>}

      <div className="mt-4">
        <Button type="submit" size="lg" disabled={loading || !body.trim()}>
          {loading ? "Sending..." : "Send Message →"}
        </Button>
      </div>
    </form>
  );
}
