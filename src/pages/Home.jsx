import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Services from "../pages/Services";
import OtherServices from "../components/OtherServices";
import AiProducts from "../components/AiProducts";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Benefits from "../pages/Benefits";
import Faq from "../pages/Faq";
import Subscriptions from "../pages/Subscriptions";
import Navbar from "../components/Navbar";
import TestimonialsTickerSection from "../components/TestimonialTickerSection";
import FadeInSection from "../components/FadeInSection";

const Home = () => {
  return (
    <main className="bg-[#f7f7f8] text-neutral-900 min-h-screen overflow-x-hidden">
      
      <Navbar />
      <section id="hero">
        <FadeInSection><Hero /></FadeInSection>
      </section>

      <section id="banner">
        <FadeInSection><Banner /></FadeInSection>
      </section>

      <section id="services">
        <FadeInSection><Services /></FadeInSection>
      </section>

      <section id="other-services">
        <FadeInSection><OtherServices /></FadeInSection>
      </section>

      <section id="ai-products">
        <FadeInSection><AiProducts /></FadeInSection>
      </section>

      <section id="projects">
        <FadeInSection><Projects /></FadeInSection>
      </section>

      <section id="about">
        <FadeInSection><About /></FadeInSection>
      </section>

      <section id="benefits">
        <FadeInSection><Benefits /></FadeInSection>
      </section>

      <section id="subscriptions">
        <FadeInSection><Subscriptions /></FadeInSection>
      </section>

      <section id="testimonials">
        <FadeInSection><TestimonialsTickerSection /></FadeInSection>
      </section>

      <section id="faq">
        <FadeInSection><Faq /></FadeInSection>
      </section>

      <FadeInSection>
        <Footer />
      </FadeInSection>
    </main>
  );
};

export default Home;
