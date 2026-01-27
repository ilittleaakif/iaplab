import { useEffect, useState } from "react";
import Loader from "../../Components/Loader";
import HeroSection from "./Hero_Section";
import Header from "./Header";
import Footer from "../Footer/footer_section";
import LibrarySection from "./Sections";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => { setIsLoading(false); }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading)
    return <Loader />;

  return (
    
    <div
      style={{
            background: "radial-gradient(125% 125% at 50% 100%, #fff 40%, #61BA89 100%)",
          }}


    >
      <Header />
      <HeroSection />
      <LibrarySection />
      <Footer />
    </div>
  );
};

export default HomePage;