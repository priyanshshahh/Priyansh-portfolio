"use client";

import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/Button";
import type { User } from "@supabase/supabase-js";

export function AuthButton({ user }: { user: User | null }) {
  const supabase = createClient();

  const signIn = async (provider: "github" | "google") => {
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  if (user) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm text-muted">
          Signed in as{" "}
          <span className="text-foreground">
            {user.user_metadata?.full_name ||
              user.user_metadata?.name ||
              user.email}
          </span>
        </span>
        <Button variant="secondary" size="sm" onClick={signOut}>
          Sign Out
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-3">
      <Button size="sm" onClick={() => signIn("github")}>
        Sign in with GitHub
      </Button>
      <Button variant="secondary" size="sm" onClick={() => signIn("google")}>
        Sign in with Google
      </Button>
    </div>
  );
}
