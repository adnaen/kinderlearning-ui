import GradientHero from "@/components/layout/Hero";

export default function Home() {
  return (
    <div>
      <div className="h-screen">
        <GradientHero />
      </div>
      <div className="h-screen bg-white">Features</div>
      <div className="h-screen bg-white">Testimonials</div>
      <div className="h-screen">FAQs</div>
    </div >
  );
}
