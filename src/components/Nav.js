import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router";
const Nav = () => {
  const { pathname } = useLocation();
  return (
    <Styldnav>
      <h1>
        <Link to="/" id="logo">
          Capture
        </Link>
      </h1>

      <ul>
        <li>
          <Link to="/"> About Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "0%" }}
          />
        </li>

        <li>
          <Link to="/work"> Our work</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "50%" : "0%" }}
          />
        </li>

        <li>
          <Link to="/contact"> Contact US </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
          />
        </li>
      </ul>
    </Styldnav>
  );
};
const Styldnav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 0rem 0rem;

    text-align: center;
    ul {
      padding: 0;
      justify-content: space-evenly;
      width: 100%;
      padding-bottom: 1rem;
    }
    li {
      padding-left: 0;
    }
  }
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
    @media (max-width: 1300px) {
      padding-left: 0rem;
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background-color: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;

export default Nav;
