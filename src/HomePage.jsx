import { useEffect, useState } from "react";
import Loader from "./Components/Loader";
import HeroSection from "./Layout/Hero/Hero_Section";
import Header from "./Layout/Header/Main_Header";
import Footer from "./Layout/Footer/footer_section";
import LibrarySection from "./Layout/library/Library_Section";

const HomePage = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => { setIsLoading(false); }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading)
    return <Loader />;

  return (
    <div
      style={{
        backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
        repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
        repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px),
        repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px)
      `,
      }}
    >
      <Header />
      <HeroSection />
      <div className="w-11/12 mx-auto bg-border/80 h-1 rounded-full"></div>
      <LibrarySection />
      <Footer />
    </div>
  );
};

export default HomePage;