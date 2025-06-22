import Hero from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
import PlatformFeatures from '@/components/PlatformFeatures';
import ModuleGallery from '@/components/ModuleGallery';
import UseCases from '@/components/UseCases';
import CTAInvestor from '@/components/CTAInvestor';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <PlatformFeatures />
      <ModuleGallery />
      <UseCases />
      <CTAInvestor />
      <Footer />
    </div>
  );
}
