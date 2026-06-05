import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

import HeroSection from '@/components/features/HeroSection';
import TrendingSection from '@/components/features/TrendingSection';
import NewReleaseSection from '@/components/features/NewReleaseSection';
// import { Button } from '@/components/ui/button';
import { useState } from 'react';
// import { useCardWidth } from '@/hooks/useCardWidth';

export default function Homepage() {
  const [cardWidth, setCardWidth] = useState(0);
  return (
    <div>
      <Navbar />

      <HeroSection />

      <TrendingSection cardWidth={cardWidth} />

      {/* <Button asChild className="bg-red z-50" /> */}
      <NewReleaseSection onWidthChange={setCardWidth} />

      <Footer />
    </div>
  );
}
