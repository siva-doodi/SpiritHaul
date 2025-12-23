"use client";
import Image from "next/image";
import HeroSection from "./components/home/HeroSection";
import WhyChooseUs from "./components/home/WhyChooseUs";
import ServicesHighlight from "./components/home/ServicesHighlight";
import IntroSection from "./components/home/IntroSection";
import CTASection from "./components/home/CTASection";
import ContactMapSection from "./components/home/ContactMapSection";

export default function Home() {
  return (
    <>
     <HeroSection />
     <IntroSection />
     <ServicesHighlight />
     <CTASection />
     <WhyChooseUs />
     <ContactMapSection />
    </>
  );
}
