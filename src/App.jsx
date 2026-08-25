import { BrowserRouter, Routes, Route } from "react-router-dom";

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
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Plan from "./pages/Plan";



function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-[76px] md:pt-[90px] pb-[72px] md:pb-0">
        <section id="about" className="scroll-mt-[90px]">
          <Hero />
        </section>

        <Stats />

        <section id="features" className="scroll-mt-[90px]">
          <Features />
        </section>

        <section id="pricing" className="scroll-mt-[90px]">
          <Pricing />
        </section>

        <Network />

        <Sponsors />

        <section id="testimonials" className="scroll-mt-[90px]">
          <Testimonials />
        </section>

        <Subscribe />

        <Footer />
      </main>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/plan" element={<Plan />} />
      </Routes>
    </BrowserRouter>
  );
}