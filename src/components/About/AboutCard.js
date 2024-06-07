import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Agwu Ezekiel </span>
            from <span className="purple"> Nigeria.</span>
            {/* <br /> I am a final year student pursuing an Integrated B.Ed
            in Business Education at Lead City University.
            <br /> */}
            <br /> I'm quiet confident, naturally curious, and perpetually
            working on improving my chops one's design problem at a time.
            <br />
            {/* Additionally, I am currently employed as a software developer at
            Sidebrief. */}
            Additionally, I am professional React Native Developer
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Critical Thinking
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <hr />
          <p style={{ color: "rgb(155 126 172)" }}>
            "Don't crave to be known, crave to know, for when you know, you will
            be known!"{" "}
          </p>
          <hr />
          <p style={{ color: "rgb(155 126 172)" }}>
            "Don't just be a developer, be the creator of development!"{" "}
          </p>
          <footer className="blockquote-footer"> Ezekiel </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
