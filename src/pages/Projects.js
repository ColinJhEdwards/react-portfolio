import React from "react";
import styled from "styled-components";
import { ProjectData, minorProjectData } from "../util/data";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";
import MinorProjectCard from "../components/MinorProjectCard";

const Projects = () => {
  const data = ProjectData();
  const minorData = minorProjectData();
  return (
    <>
      <StyledProjects
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="title">
          <h2>Projects</h2>
        </div>
        <motion.div className="projects">
          {data.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.Description}
              code={project.code}
              deploy={project.deploy}
              repo={project.repo}
              cover={project.img[0]}
            />
          ))}
        </motion.div>
        <div className="title other">
          <h2>Other Noteworthy Projects</h2>
          <hr width="60%" color="gray" />
        </div>
        <div className="minorProjects">
          {minorData.map((project) => (
            <MinorProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.Description}
              code={project.code}
              deploy={project.deploy}
              repo={project.repo}
            />
          ))}
        </div>
      </StyledProjects>
    </>
  );
};

const StyledProjects = styled(motion.div)`
  min-height: 90vh;
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem 0rem;
    text-align: center;
  }
  .projects {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
  }

  .minorProjects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;
    width: 80%;
    margin: 2rem auto;
  }

  @media (max-width: 430px) {
    .projects {
      width: 90%;
    }
  }
`;

export default Projects;
