import { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import AboutApp from './components/AboutApp';
import InstallApp from './components/InstallApp';
import DonateSection from './components/DonateSection';
import UserReviews from './components/UserReviews';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [typedText, setTypedText] = useState('');
  const fullText = 'MY BINDLE';

  useEffect(() => {
    let timeout;
    if (typedText.length < fullText.length) {
      timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 200);
    }
    return () => clearTimeout(timeout);
  }, [typedText]);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 2000);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="h-screen w-screen flex items-center justify-center bg-white z-50 fixed top-0 left-0">
          <h1 className="text-4xl font-bold text-[#ff5349] font-mono tracking-widest">
            {typedText}
            <span className="animate-pulse">|</span>
          </h1>
        </div>
      ) : (
        <>
          <Header />
          <HeroSection />
          <Features />
          <AboutApp />
          <InstallApp />
          <DonateSection />
          <UserReviews />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
