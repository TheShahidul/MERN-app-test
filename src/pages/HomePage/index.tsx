import React, { useState } from 'react';

import NavBar from './components/NavBar';
import BannerCarousel from './components/BannerCarousel';
import CategoryGrid from './components/CategoryGrid';
import TrendingSection from './components/TrendingSection';
import OfferCarousel from './components/OfferCarousel';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import NewDeals from './components/NewDeals';
import SpecialEidOffers from './components/SpecialEidOffers';
import UpcomingProducts from './components/UpcomingProducts';

const HomePage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="bg-white ">
      
      <NavBar isAuthenticated={isAuthenticated} />
      <main className="pt-16 container mx-auto  border border-black">
        <BannerCarousel />
        <CategoryGrid />
        <TrendingSection />
        <OfferCarousel />
        <NewDeals />
        <SpecialEidOffers />
        <UpcomingProducts />
        <CallToAction />
      </main>
      <Footer />

    </div>
  );
};




export default HomePage;
