import HeroSection from './sections/HeroSection.jsx';
import AboutSection from './sections/AboutSection.jsx';
import GamePlatformsSection from './sections/GamePlateformsSection.jsx';
import HomePageFooter from './sections/HomePageFooter.jsx';

const HomePage = () => {
  return (
    <div className={'pt-20'}>
      <HeroSection />
      <AboutSection />
      <GamePlatformsSection />
      <HomePageFooter />
    </div>
  );
};
export default HomePage;
