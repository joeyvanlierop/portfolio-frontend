import { loremIpsum } from "lorem-ipsum";
import { Row, Button, Nav, Col } from "react-bootstrap";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Typewriter from "./components/Typewriter";
import DynamicNavbar from "./components/DynamicNavbar";
import Divider from "./components/Divider";
import GitHubShowcase from "./components/Showcase/GitHubShowcase";
import SkillCard from "./components/SkillCard";
import Contact from "./components/Contact";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/normalize.css";
import "./styles/stylesheet.css";
import "./styles/navbar.css";
import "./styles/showcase.css";
import "./styles/typewriter.css";
import "./styles/about.css";
import "./styles/divider.css";
import "./styles/skills.css";
import "./styles/contact.css";

ReactDOM.render(
  <Fragment>
    <DynamicNavbar fixed="top" id={"top-navbar"}>
      <Nav>
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">Blog</Nav.Link>
        <Nav.Link href="#">Notes</Nav.Link>
      </Nav>
    </DynamicNavbar>

    <section className="section" id="splash">
      <section id="about-wrapper" className="main-column">
        <section id="about">
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
          <p className="about-text">{loremIpsum({ count: 10 })}</p>
          <div>
            <Button variant="outline-dark" href="#projects">
              Projects
            </Button>
            <Button variant="outline-dark" href="#skills">
              Skills
            </Button>
            <Button variant="outline-dark" href="#contact">
              Contact
            </Button>
          </div>
        </section>
      </section>
    </section>

    <Divider />

    <section className="section" id="projects">
      <h1 className="main-column header">Projects</h1>
      <GitHubShowcase className="main-column" profile="joeyvanlierop" />
    </section>

    <Divider />

    <section className="section" id="skills">
      <h1 className="main-column header">
        Skills
        <Button variant="outline-dark" href="#" className="resume-download">
          Résumé
        </Button>
      </h1>
      <div className="main-column flex-center-col">
        <Row>
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
        <Row>
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
      </div>
    </section>

    <Divider />

    <section className="section" id="contact">
      <h1 className="main-column header">Contact</h1>
      <Contact className="main-column" />
    </section>
  </Fragment>,
  document.getElementById("root")
);
