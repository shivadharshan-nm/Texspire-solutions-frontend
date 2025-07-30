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

const Home = () => {
  return (
    <main className="bg-[#f7f7f8] text-neutral-900 min-h-screen overflow-x-hidden">
      
      <Navbar />
      <section id="hero">
        <Hero />
      </section>

      <section id="banner">
        <Banner />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="other-services">
        <OtherServices />
      </section>

      <section id="ai-products">
        <AiProducts />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="benefits">
        <Benefits />
      </section>

      <section id="subscriptions">
        <Subscriptions />
      </section>

      <section id="testimonials">
        <TestimonialsTickerSection />
      </section>

      <section id="faq">
        <Faq />
      </section>

      <Footer />
    </main>
  );
};

export default Home;