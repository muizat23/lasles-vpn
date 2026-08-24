import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Network from "./components/Network";
import Sponsors from "./components/Sponsors";
import Testimonials from "./components/Testimonials";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <Navbar />

      <section id="about">
        <Hero />
        <Stats />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="pricing">
        <Pricing />
      </section>

      <Network />
      <Sponsors />

      <section id="testimonials">
        <Testimonials />
      </section>

      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;