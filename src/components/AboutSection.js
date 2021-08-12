import home1 from "../img/home1.png";
import { motion } from "framer-motion";
import { About, Description, Image, Hide } from "../styles";
import { titleAnim, fade, photoAnim } from "../Animation";
import Wave from "./Wave";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dream</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true</motion.h2>
          </Hide>
          <motion.p variants={fade}>
            Contact us for any photography or videography ideas you have. W have
            professional for your help
          </motion.p>
          <motion.button variants={fade}>Contact Us</motion.button>
        </motion.div>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
