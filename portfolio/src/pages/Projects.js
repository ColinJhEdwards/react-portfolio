import React, { useState } from "react";
import styled from "styled-components";
import { ProjectData } from "../util/data";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import { slider, pageAnimation, grow } from "../animations";

const Projects = () => {
  const [data, setData] = useState(ProjectData);
  console.log(data);
  return (
    <StyledProjects
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="title">
        <h2>Projects</h2>
        <hr width="60%" color="black" />
      </div>
      <motion.div className="projects">
        {data.map((project) => (
          <ProjectCard
            title={project.title}
            description={project.Description}
            code={project.code}
            href={project.href}
          />
        ))}
      </motion.div>
    </StyledProjects>
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
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default Projects;
