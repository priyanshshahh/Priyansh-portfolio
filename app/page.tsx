import { PageTransition } from "@/components/layout/PageTransition";
import { Hero } from "@/components/home/Hero";
import { MetricsBanner } from "@/components/home/MetricsBanner";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <MetricsBanner />
      <FeaturedProjects />
    </PageTransition>
  );
}
