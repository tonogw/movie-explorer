import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

import HeroSection from '@/components/features/HeroSection';
import TrendingSection from '@/components/features/TrendingSection';
import NewReleaseSection from '@/components/features/NewReleaseSection';

export default function Homepage3() {
  return (
    <div>
      <Navbar />

      <HeroSection />

      <TrendingSection />

      <NewReleaseSection />

      <Footer />
    </div>
  );
}
