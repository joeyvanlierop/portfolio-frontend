import { loremIpsum } from "lorem-ipsum";
import React from "react";
import About from "./About";
import Background from "./Background";
import Button from "./Button";
import Contact from "./Contact";
import Container from "./Container";
import Divider from "./Divider";
import Header from "./Header";
import Navbar from "./Navbar";
import { ThemeContext } from "./AppTheme";
import Row from "./Row";
import Section from "./Section";
import GitHubShowcase from "./Showcase/GitHubShowcase";
import SkillCard from "./SkillCard";
import Splash from "./Splash";
import Text from "./Text";
import Typewriter from "./Typewriter";

const about = loremIpsum({ count: 10 });

export function App() {
  const { toggle, mode } = React.useContext(ThemeContext);

  console.log(toggle);
  console.log(mode);

  return (
    <Background>
      <Navbar id={"top-navbar"}>
        <Navbar.Link href="#">Home</Navbar.Link>
        <Navbar.Link href="#">Blog</Navbar.Link>
        <Navbar.Link href="#">Notes</Navbar.Link>
      </Navbar>
      <Splash>
        <Container>
          <About id="about">
            <Header>
              <Typewriter
                className="header"
                prefix={"Hi, I'm"}
                loop={false}
                phrases={[
                  [" Joey!"],
                  [" a developer‍ ", "👨‍💻"],
                  [" a student ", "🎓"],
                  [" a skier ", "🎿"],
                  [" a cast iron enthusiast ", "🍳"],
                  [" a scuba diver ", "🤿"],
                  ["..."],
                ]}
              />
            </Header>
            <Text marginY={"3rem"}>{about}</Text>
            <About.Footer>
              <About.Button href="#projects">Projects</About.Button>
              <About.Button href="#skills">Skills</About.Button>
              <About.Button href="#contact">Contact</About.Button>
              <About.Button inverted onClick={() => toggle()}>
                {mode === "light" ? "Dark" : "Light"}
              </About.Button>
            </About.Footer>
          </About>
        </Container>
      </Splash>

      <Divider />

      <Section id={"projects"}>
        <Container>
          <Header>Projects</Header>
        </Container>
        <GitHubShowcase profile="joeyvanlierop" />
      </Section>

      <Divider />

      <Section id="skills">
        <Container>
          <Header>
            Skills
            <Button
              fontSize="1.25rem"
              fontWeight="600"
              borderWidth="2px"
              marginX="2rem"
            >
              Résumé
            </Button>
          </Header>

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
        </Container>
      </Section>

      <Divider />

      <Section id="contact">
        <Container>
          <Header>Contact</Header>
          <Contact />
        </Container>
      </Section>
    </Background>
  );
}

export default App;
