import React from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import Education from "../education/EducationComponent";
import Experience from "../experience/Experience";
import Projects from "../projects/Projects";
import Contact from "../contact/ContactComponent";
import Top from "../../containers/toTop/Top";

function Home(props) {
  return (
    <div>
      <Header theme={props.theme} setTheme={props.setTheme} />
      <Greeting theme={props.theme} />
      <Skills theme={props.theme} />
      <Education theme={props.theme} />
      <Experience theme={props.theme} />
      <Projects theme={props.theme} />
      <Contact theme={props.theme} />
      <Footer theme={props.theme} />
      <Top />
    </div>
  );
}

export default Home;
