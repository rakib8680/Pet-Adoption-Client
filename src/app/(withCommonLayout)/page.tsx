import AboutUs from "@/components/Ui/HomePage/AboutUs/AboutUs";
import AllPets from "@/components/Ui/HomePage/AllPets/AllPets";
import HeroSection from "@/components/Ui/HomePage/HeroSection/HeroSection";
import RecommendPets from "@/components/Ui/HomePage/RecommendPets/RecommendPets";
import ContactUs from "./contact/page";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AllPets />
      <AboutUs />
      <RecommendPets />
      <ContactUs />
    </>
  );
};

export default HomePage;
