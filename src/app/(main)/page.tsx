import Hero from "@/components/Hero";
import CallToActionCards from "@/components/CallToActionCards";
import RecentActivity from "@/components/UberSections/RecentActivity";
import UberForBusiness from "@/components/UberSections/UberForBusiness";
import DriveWhenYouWant from "@/components/UberSections/DriveWhenYouWant";
import GoGet2025 from "@/components/UberSections/GoGet2025";
import UberOneMembership from "@/components/UberSections/UberOneMembership";
import AppsSection from "@/components/UberSections/AppsSection";

export default function HomePage() {
  return (
    <main className="flex-1 w-full">
      <Hero />
      <CallToActionCards />
      <RecentActivity />
      <DriveWhenYouWant />
      <UberForBusiness />
      <GoGet2025 />
      <UberOneMembership />
      <AppsSection />
    </main>
  );
}
