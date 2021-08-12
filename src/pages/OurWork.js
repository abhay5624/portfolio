import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";
import { useScroll } from "../components/Scroll";
import { widthAnim } from "../Animation";
import {
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
} from "../Animation";
const OurWork = () => {
  const [element1, controls1] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/the-athlete">
          <Hide>
            <motion.img
              variants={photoAnim}
              src={athlete}
              alt="Athlete Image"
            />
          </Hide>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          impedit, ea similique voluptatum suscipit eaque laborum magnam optio
          voluptas dolore amet accusantium commodi velit ut doloribus totam
          nobis eos. Temporibus.
        </p>
      </Movie>
      <Movie
        ref={element1}
        variants={fade}
        animate={controls1}
        initial="hidden"
      >
        <h2>The Racer</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/the-racer">
          <img src={theracer} alt="the racer" />
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          impedit, ea similique voluptatum suscipit eaque laborum magnam optio
          voluptas dolore amet accusantium commodi velit ut doloribus totam
          nobis eos. Temporibus.
        </p>
      </Movie>
      <Movie
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <h2>Good Times</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/good-times">
          <img src={goodtimes} alt="goodtimes" />
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          impedit, ea similique voluptatum suscipit eaque laborum magnam optio
          voluptas dolore amet accusantium commodi velit ut doloribus totam
          nobis eos. Temporibus.
        </p>
      </Movie>
    </Work>
  );
};
const Hide = styled.div`
  overflow: hidden;
`;
const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  overflow: hidden;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  p {
    color: black;
    font-size: 0.8rem;
  }
`;
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background-color: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
export default OurWork;
