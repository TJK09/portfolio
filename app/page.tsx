import Image from "next/image";
import Hero from "./components/Hero";
import Info from "./components/Info";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";



export default function Home() {
  return (
    <>
        <Hero />
        <Info />
        <About />
        <Skills />
        <Contact />
   </>
  );
}
