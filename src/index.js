import { loremIpsum } from "lorem-ipsum";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import About from "./components/About";
import Button from "./components/Button";
import Contact from "./components/Contact";
import Divider from "./components/Divider";
import Navbar from "./components/Navbar";
import Row from "./components/Row";
import Section from "./components/Section";
import GitHubShowcase from "./components/Showcase/GitHubShowcase";
import SkillCard from "./components/SkillCard";
import Splash from "./components/Splash";
import Typewriter from "./components/Typewriter";
import "./styles/stylesheet.css";

ReactDOM.render(
  <Fragment>
    <Navbar id={"top-navbar"}>
      <Navbar.Link href="#">Home</Navbar.Link>
      <Navbar.Link href="#">Blog</Navbar.Link>
      <Navbar.Link href="#">Notes</Navbar.Link>
    </Navbar>

    <Splash>
      <About>
        <About.Header>
          <Typewriter
            className="header"
            prefix={"Hi, I'm "}
            loop={false}
            words={[
              "Joey Van Lierop.",
              "a developer.",
              "a student.",
              "a skiier.",
              "a cook.",
              "running out of ideas.",
              "out of ideas.",
            ]}
          />
        </About.Header>
        <About.Body className="about-text">
          {loremIpsum({ count: 10 })}
        </About.Body>
        <About.Footer>
          <About.Button href="#projects">Projects</About.Button>
          <About.Button href="#skills">Skills</About.Button>
          <About.Button href="#contact">Contact</About.Button>
        </About.Footer>
      </About>
    </Splash>

    <Divider />

    <Section id={"projects"}>
      <Section.Header>Projects</Section.Header>
      <GitHubShowcase profile="joeyvanlierop" />
    </Section>

    <Divider />

    <Section id="skills">
      <Section.Header>
        Skills
        <Button
          fontSize="1.25rem"
          fontWeight="600"
          borderSize="2px"
          marginX="2rem"
        >
          Résumé
        </Button>
      </Section.Header>
      <Row className="main-column">
        <SkillCard
          title={"Java"}
          points={[
            "Developed a wide variety of projects, the most extensive being a 2D game engine.",
            "Contributed to various open-source projects.",
          ]}
        />
        <SkillCard
          title={"Python"}
          points={[
            "Used in smaller projects and also to experiment with machine learning.",
            "Developed various bots using the PRAW library.",
          ]}
        />
        <SkillCard
          title={"C"}
          points={[
            "Completed an accredited course at the University of British Columbia.",
            "Interfaced with real-world hardware.",
          ]}
        />
      </Row>
      <Row className="main-column">
        <SkillCard
          title={"Web Development"}
          points={[
            "Utilized HTML, CSS, and JavaScript to develop websites and web applications.",
            'Completed "The Odin Project" curriculum.',
            "Worked with React and Bootstrap.",
          ]}
        />
        <SkillCard
          title={"App Development"}
          points={[
            "Utilized Dart in the Flutter framework to develop cross-platform mobile applications.",
          ]}
        />
        <SkillCard
          title={"Game Development"}
          points={[
            "Worked with multiple game engines including Unity, Godot, and Photon.",
            "Utilized C# (Unity), GDScript (Godot), and JavaScript (Photon).",
            "Currently working on a 2D platformer in Godot.",
          ]}
        />
      </Row>
    </Section>

    <Divider />

    <Section id="contact">
      <Section.Header>Contact</Section.Header>
      <Contact />
    </Section>
  </Fragment>,
  document.getElementById("root")
);
