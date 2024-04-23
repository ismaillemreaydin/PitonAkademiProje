import Image from "next/image";
import Header from "../components/Header";
import MainSection from "../components/MainSection";
import AboutSection from "../components/AboutSection";
import EventsSection from "../components/EventsSection";
import Footer from "../components/Footer";
import Forms from "../components/Forms";
export default function Home() {
  return (
    <div>
      <Header />
      <MainSection />
      <AboutSection />
      <EventsSection />
      <Forms/>
      <Footer />
    </div>
  );
}
