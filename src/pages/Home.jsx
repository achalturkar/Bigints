import React from "react";
import HeroCarousel from "../components/HeroCarousel";

import { Helmet } from "react-helmet-async";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import CounterSection from "../components/CounterSection";
import TestimonialSection from "../components/TestimonialSection";


export default function Home() {
  return (

    <>
      <Helmet>
        <title>BigInt Technology | Software Development, Digital Marketing & HR Outsourcing
        </title>
        <meta
          name="description"
          content="Bigints empowers businesses with IT services, digital marketing, web development, and payroll solutions to accelerate growth and innovation."
        />
        <link rel="canonical" href="https://bigints.com/" />
      </Helmet>
      <div>
        <HeroCarousel />

        <AboutSection/>

        <ServicesSection/>

        <CounterSection/>

        <TestimonialSection/>

      </div>

    </>
  );
}

