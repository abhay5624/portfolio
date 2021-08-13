import React from "react";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import FaqSection from "../components/FaqSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";
import ScrollTop from "../components/ScrollTop";

const AboutusPage = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <ServiceSection />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
};

export default AboutusPage;
