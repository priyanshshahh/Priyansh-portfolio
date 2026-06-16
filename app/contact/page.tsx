import { PageTransition } from "@/components/layout/PageTransition";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactClient } from "@/components/contact/ContactClient";
import { siteConfig } from "@/lib/data/site";
import { createClient } from "@/lib/supabase/server";
import type { GuestbookEntry } from "@/lib/supabase/types";

export const metadata = {
  title: "Contact",
};

export default async function ContactPage() {
  const supabaseConfigured = Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );

  let user = null;
  let entries: GuestbookEntry[] = [];
  let isOwner = false;

  if (supabaseConfigured) {
    try {
      const supabase = await createClient();
      const { data: userData } = await supabase.auth.getUser();
      user = userData.user;
      isOwner = user?.email?.toLowerCase() === siteConfig.email.toLowerCase();

      // RLS returns only approved rows to the public and all rows to the owner.
      const { data } = await supabase
        .from("guestbook")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(50);

      entries = (data as GuestbookEntry[]) ?? [];
    } catch {
      // Supabase not reachable
    }
  }

  return (
    <PageTransition>
      <SectionHeading
        eyebrow="Contact"
        title="Let's Build Together"
        description="Open to research collaborations, quantitative engineering roles, and ambitious projects."
      />

      <ContactClient
        user={user}
        entries={entries}
        supabaseConfigured={supabaseConfigured}
        isOwner={isOwner}
      />
    </PageTransition>
  );
}
