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
      background:
        "radial-gradient(circle at top, #1c1c1c, #000000)",
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