import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import ProblemSolving from "../components/ProblemSolving";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemSolving/>
      <Features /> 
      <Pricing />
           <Footer />
    </>
  );
}