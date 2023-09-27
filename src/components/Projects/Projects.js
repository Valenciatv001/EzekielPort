import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import brookie from "../../Assets/Projects/brokie.png";
import facebook from "../../Assets/Projects/facebook.png";
import nexter from "../../Assets/Projects/nexter.png";
import natour from "../../Assets/Projects/natour.png";
import trillo from "../../Assets/Projects/trillo.png";
import netflix from "../../Assets/Projects/netflix.png";
import netflixApp from "../../Assets/Projects/netflix-app.jpg";
import spotifyApp from "../../Assets/Projects/spotify-app.png"
import threads from "../../Assets/Projects/threads.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotifyApp}
              isBlog={false}
              title="Netflix App"
              description="Expo-based Netflix app showcasing my experience in mobile development and UI design. Delivering a seamless streaming experience for users on Andriod and IOS platforms."
              ghLink="https://github.com/valenciatv001/Expo-Netflix"
              demoLink="https://expo-netflix.vercel.app"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflixApp}
              isBlog={false}
              title="Spotify App"
              description="Created an impressive Expo Spotify app that blends music discovery with seamless navigation. Experience the joy of personalized playlists and explore to your favourite tunes effortlessy. Elovating the music streaming experience!."
              ghLink="https://github.com/valenciatv001/Expo-spotify"
              demoLink="https://expo-spotify.vercel.app"
            />
          </Col>



          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflixApp}
              isBlog={false}
              title="The Woods Mobile App - React Native"
              description="I've successfully crafted a feature-rich eCommerce mobile application using the power of React Native. This project encompasses all the essential components of a modern online shopping experience, with functionalities like product listings,  shopping cart management. By leveraging my expertise in React Native and my passion for user-friendly mobile solutions, I've demonstrated my capabilities in creating seamless, cross-platform mobile apps."
              ghLink="https://github.com/valenciatv001/Expo-spotify"
              demoLink="https://expo-spotify.vercel.app"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={threads}
              isBlog={false}
              title="Threads App"
              description="I am proud to present my latest project, a fully-functional threads clone, which I have developed from the ground up to demonstrate my proficiency in web development and software engineering."
              ghLink="https://github.com/valenciatv001/threads_app"
              demoLink="https://threads-app-ebon.vercel.app"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={threads}
              isBlog={false}
              title="Google Webpage"
              description=" I designed and built a Google Clone Web Application using cutting-edge technologies including TypeScript, JavaScript, Node.js, and React. This project replicates the core functionality of Google's search engine, showcasing my expertise in full-stack development and frontend design. It includes features like real-time search, responsive design, and a user-friendly interface."
              ghLink="https://github.com/Valenciatv001/Google"
              demoLink="https://google-stack.vercel.app"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={threads}
              isBlog={false}
              title="YouTube Fullstack Clone Web Application"
              description="I successfully developed a comprehensive YouTube Fullstack Clone Web Application. Leveraging my expertise in technologies such as JavaScript, Node.js, and React, this project replicates the core features of the popular video-sharing platform, YouTube. It includes functionalities like user authentication, video uploading, comments, likes, and a responsive design. This accomplishment highlights my proficiency in full-stack development and demonstrates my ability to create complex web applications."
              ghLink="https://github.com/Valenciatv001/YouTube-webapp"
              demoLink="https://youtube-webapp-clone.vercel.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brookie}
              isBlog={false}
              title="brookies"
              description="Welcone to my latest project, an innovative and user-friendly Apple Watch Ecoomerce WenApp, designed to provide customers with a seamless shopping experience for the world's popular smartwatches"
              ghLink="https://github.com/Valenciatv001/nextjs-ecommerce-site"
              demoLink="https://brookies.app.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="netflix"
              description="Experience a seamless, intuitive, and personalized on-demand streaming platform with our feature-rich Netflix clone, offering high-quality content and a curated library for an engaging and binge-worthy entertainment experience."
              ghLink="https://github.com/Valenciatv001/Netflix-Clone"
              demoLink="https://netflix-clone-design.netlify.app/"    
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={natour}
              isBlog={false}
              title="natour"
              description="Welcone to Natour, a captivating tourism web application that i have a designed and developed to revolutionize the way travelers plan and experience their adventures."
              ghLink="https://github.com/valenciatv001/Natour"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trillo}
              isBlog={false}
              title="trillo"
              description="I am trilled to present Trillo web application, designed to simplify and ehnace the hotel booking experience for travelers worlwide. Trillo is a comprehensive platform that enables users to discover, explore and boo their ideal accommodations seamlessy"
              ghLink="https://github.com/Valenciatv001/Trillo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nexter}
              isBlog={false}
              title="nexter"
              description="I delighted to present Nexter, an exqusite luxury apartment e-commerce web application that redefines the online real  estate shopping experience. Through meticulous design and cutting-edge development, Nexter offers an immersive platform for users to discovers and explore luxurious living spaces."
              ghLink="https://github.com/Valenciatv001/Nexter"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={facebook}
              isBlog={false}
              title="Facebook-Clone"
              description="I am proud to present my latest project, a fully-functional Facebook clone, which I have developed from the ground up to demonstrate my proficiency in web development and software engineering."
              ghLink="https://github.com/valenciatv001/Facebook-Clone"
              demoLink="https://val-social.netlify.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
