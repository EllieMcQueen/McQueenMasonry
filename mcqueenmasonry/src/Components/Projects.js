import React from "react";
import { imgDir } from "../assets/projects/imgDir";
import Carousel from "react-bootstrap/Carousel";

const Projects = () => {
  const project1ImgMapped = imgDir.projects.project1.map((img, i) => {
    return (
      <Carousel.Item key={i}>
        <img className="w-101" src={img} alt={`slide${i}`} />
      </Carousel.Item>
    );
  });

  const project2ImgMapped = imgDir.projects.project2.map((img, i) => {
    return (
      <Carousel.Item key={i}>
        <img className="w-1000" src={img} alt={`slide${i}`} />
      </Carousel.Item>
    );
  });

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">PROJECTS</h2>
      <article className="project1">
        <h2>Name of Project</h2>
        <p>
          <strong>About:</strong> Blah Blah Blah
        </p>
        <p>
          <strong>Description:</strong> Blah Blah Blah
        </p>
        
        <Carousel className="project1Carousel">{project1ImgMapped}</Carousel>
      </article>
      <article className="project2">
        <h2>Name of Project</h2>
        <p>
          <strong>About:</strong>blah blah blah
        </p>
        <p>
          <strong>Description:</strong> Blah Vlah Blah
        </p>
        
        <Carousel className="project2Carousel">
          {project2ImgMapped}
        </Carousel>
      </article>
      
    </section>
  );
};
export default Projects;
