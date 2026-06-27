import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import Demo from "../components/Demo";
import FAQ from "../components/FAQ";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
       <Demo />
           <Features /> 
            
               <FAQ />
                <Testimonials />
                        <Pricing />
           <Footer />
    </>
  );
}