import React from "react";
import ServicesHero from "../components/services/ServicesHero";
import ServicesIntro from "../components/services/ServicesIntro";
import LogisticsSection from "../components/services/LogisticsSection";
import WarehousingSection from "../components/services/WarehousingSection";
import FulfilmentSection from "../components/services/FulfilmentSection";
import ServicesWhyChoose from "../components/services/ServicesWhyChoose";

const ServicesPage=()=>{
    return(
        <>
            <ServicesHero />
            <ServicesIntro />
            <LogisticsSection />
            <WarehousingSection />
            <FulfilmentSection />
        </>
    )
}
export default ServicesPage;