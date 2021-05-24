import React, { useState } from "react";
import styled from "styled-components";
import { ProjectData } from "../util/data";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [data, setData] = useState(ProjectData);
  console.log(data);
  return (
    <StyledProjects>
      <div className="title">
        <h2>Projects</h2>
        <hr width="60%" color="black" />
      </div>
      <div className="projects">
        {data.map((project) => (
          <ProjectCard
            title={project.title}
            description={project.Description}
            code={project.code}
            href={project.href}
          />
        ))}
      </div>
    </StyledProjects>
  );
};

const StyledProjects = styled.div`
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

export default Projects;
