import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { pageAnimation, titleAnim } from "../Animation";
import ScrollTop from "../components/ScrollTop";

const ContactUs = () => {
  return (
    <ContactStyled
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send us a Message</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send an Email</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Social Media</h2>
          </Social>
        </Hide>
      </div>
      <ScrollTop />
    </ContactStyled>
  );
};
const ContactStyled = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1300px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;
const Title = styled(motion.div)`
  @media (max-width: 1300px) {
    margin-top: 5rem;
  }
  margin-bottom: 4rem;
  color: black;
`;
const Hide = styled(motion.div)`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background-color: #353535;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;
export default ContactUs;
