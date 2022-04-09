import React, { useState } from "react";
import styled from "styled-components";
import { ProjectData } from "../util/data";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";

const Projects = () => {
  const [data, setData] = useState(ProjectData);

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
          <hr width="60%" color="gray" />
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
        <div className="title">
          <h2>Other Noteworthy Projects</h2>
          <hr width="60%" color="gray" />
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
  }
  .projects {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
  }
`;

export default Projects;
