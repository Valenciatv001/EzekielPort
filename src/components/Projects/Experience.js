// import React from "react";
// import experienceData from "../../Assets/data";
// import "./experience.css";

// const Experience = () => {
//   return (
//     <div>
//       <h1 className="experience-heading">Experience</h1>
//       <div className="experience-container">
//         {experienceData.map((experience, index) => (
//           <div key={index} className="experience-card">
//             <h2 className="company">{experience.company}</h2>
//             <h3 className="role">{experience.role}</h3>
//             <p className="duration">{experience.duration}</p>
//             <p className="description">{experience.description}</p>
//             <a
//               href={experience.linkedin}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="linkedin-button"
//             >
//               View on LinkedIn
//             </a>
//           </div>
//         ))}
//       </div>
//       {/* // eslint-disable-next-line jsx-a11y/anchor-has-content */}
//       <div className="linkedin-button">
//         {" "}
//         <a
//           href="https://www.linkedin.com/in/agwuezekiel/details/experience/"
//           className="descriptionnn"
//         >
//           View all experience on LinkedIn
//         </a>
//       </div>
//     </div>
//   );
// };

// // const styles = {
// //   experienceCard: {
// //     backgroundColor: "#1c1c1e",
// //     padding: "20px",
// //     borderRadius: "10px",
// //     marginBottom: "20px",
// //     color: "white",
// //   },
// //   company: {
// //     fontSize: "24px",
// //     marginBottom: "5px",
// //   },
// //   role: {
// //     fontSize: "20px",
// //     color: "#aaa",
// //     marginBottom: "5px",
// //   },
// //   duration: {
// //     fontSize: "16px",
// //     color: "#666",
// //     marginBottom: "10px",
// //   },
// //   description: {
// //     fontSize: "16px",
// //   },
// // };

// export default Experience;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

import ExperiencesCard from "./ExperiencesCard";

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Experience </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ExperiencesCard
              isBlog={false}
              comapny="YENOVAS"
              role="React Native Engineer"
              duration="May 2024 - Present"
              description="Expo-based Netflix app showcasing my experience in mobile development and UI design. Delivering a seamless streaming experience for users on Andriod and IOS platforms."
              linkedin="https://www.linkedin.com/in/agwuezekiel/details/experience/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperiencesCard
              isBlog={false}
              comapny="Sidebrief"
              role="Frontend Engineer"
              duration="March 2023 - Present"
              description="Engaged in close collaboration with product managers and designers to conceptualize and craft wireframes, mockups, and prototypes tailored for new web applications, leading to a remarkable 40% reduction in development time"
              linkedin="https://www.linkedin.com/in/agwuezekiel/details/experience/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperiencesCard
              isBlog={false}
              comapny="KODE10X"
              role="React Native Engineer"
              duration="Jan 2024 - May 2024"
              description="Developed and maintained cross-platform mobile applications using React Native. Improved app performance and user experience."
              linkedin="https://www.linkedin.com/in/agwuezekiel/details/experience/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperiencesCard
              isBlog={false}
              comapny="Mid-View Healthcare LTD"
              role="React Native Engineer"
              duration="Jan 2024 - May 2024"
              description="Increased Company Revenue: Midview Healthcare app has boosted company revenue by 30% since its launch."
              linkedin="https://www.linkedin.com/in/agwuezekiel/details/experience/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperiencesCard
              isBlog={false}
              comapny="Cyberverdict"
              role="Full Stack Developer"
              duration="Nov 2023 - Jan 2024"
              description="Assisted in developing web applications and APIs. Conducted code reviews and implemented best practices for clean code. Collaborated with a team of three engineers in refactoring and building a high-performance web application.  Enabled users to create diverse content, including articles and posts, akin to the Medium experience."
              linkedin="https://www.linkedin.com/in/agwuezekiel/details/experience/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperiencesCard
              isBlog={false}
              comapny="Neru Lending"
              role="React Native Developer"
              duration="Oct 2023 - Dec 2023"
              description="Actively involved as a React Native Consultant at Neru Lending, playing a pivotal role in the advancement and refinement of the company's mobile applications through the proficient utilization of React Native.."
              linkedin="https://www.linkedin.com/in/agwuezekiel/details/experience/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
