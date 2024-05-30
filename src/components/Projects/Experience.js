import React from "react";
import experienceData from "../../Assets/data";
import "./experience.css";

const Experience = () => {
  return (
    // <div>
    //   <h1 style={{ color: "white", textAlign: "center", marginBottom: "20px" }}>
    //     Experience
    //   </h1>
    //   <div>
    //     {experienceData.map((experience, index) => (
    //       <div key={index} style={styles.experienceCard}>
    //         <h2 style={styles.company}>{experience.company}</h2>
    //         <h3 style={styles.role}>{experience.role}</h3>
    //         <p style={styles.duration}>{experience.duration}</p>
    //         <p style={styles.description}>{experience.description}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div>
      <h1 className="experience-heading">Experience</h1>
      <div className="experience-container">
        {experienceData.map((experience, index) => (
          <div key={index} className="experience-card">
            <h2 className="company">{experience.company}</h2>
            <h3 className="role">{experience.role}</h3>
            <p className="duration">{experience.duration}</p>
            <p className="description">{experience.description}</p>
            <a
              href={experience.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-button"
            >
              View on LinkedIn
            </a>
          </div>
        ))}
      </div>
      {/* // eslint-disable-next-line jsx-a11y/anchor-has-content */}
      <div className="linkedin-button">
        {" "}
        <a
          href="https://www.linkedin.com/in/agwuezekiel/details/experience/"
          className="descriptionnn"
        >
          View all experience on LinkedIn
        </a>
      </div>
    </div>
  );
};

// const styles = {
//   experienceCard: {
//     backgroundColor: "#1c1c1e",
//     padding: "20px",
//     borderRadius: "10px",
//     marginBottom: "20px",
//     color: "white",
//   },
//   company: {
//     fontSize: "24px",
//     marginBottom: "5px",
//   },
//   role: {
//     fontSize: "20px",
//     color: "#aaa",
//     marginBottom: "5px",
//   },
//   duration: {
//     fontSize: "16px",
//     color: "#666",
//     marginBottom: "10px",
//   },
//   description: {
//     fontSize: "16px",
//   },
// };

export default Experience;
