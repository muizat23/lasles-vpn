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
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Pricing />
      <Network />
      <Sponsors />
      <Testimonials />
      <Subscribe />
      <Footer />
    
    </div>
  );
}

export default App;