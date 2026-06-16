import { PageTransition } from "@/components/layout/PageTransition";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SocialFeed } from "@/components/socials/SocialFeed";
import { LinkedInEmbeds } from "@/components/socials/LinkedInEmbeds";
import { GitHubActivity } from "@/components/socials/GitHubActivity";
import { siteConfig } from "@/lib/data/site";
import { xPosts } from "@/lib/data/social-posts";

export const metadata = {
  title: "Socials",
};

export default function SocialsPage() {
  return (
    <PageTransition>
      <SectionHeading
        eyebrow="Connect"
        title="Where I post & build in public"
        description="Research updates and quant notes on LinkedIn and X, and everything I ship on GitHub. Each feed scrolls on its own."
      />

      {/* LinkedIn + X — two scrollable feeds */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <LinkedInEmbeds />
        </Reveal>
        <Reveal>
          <SocialFeed
            platform="x"
            name={siteConfig.name}
            subtitle={`@${siteConfig.xUsername}`}
            handle={`@${siteConfig.xUsername}`}
            profileUrl={siteConfig.x}
            posts={xPosts}
          />
        </Reveal>
      </div>

      {/* GitHub — full width */}
      <Reveal className="mt-6">
        <GitHubActivity />
      </Reveal>
    </PageTransition>
  );
}
