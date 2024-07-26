import React, { useEffect, useState } from "react";
import styles from "./ProjectCard.module.css";

const getRandomColor = () => {
  const letters = '89ABCDEF'; 
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 8)]; 
  }
  return color;
};

const ProjectCard = ({ project }) => {
  const [tagColors, setTagColors] = useState({});

  useEffect(() => {
    const colors = {};
    project.tags.forEach(tag => {
      colors[tag] = getRandomColor();
    });
    setTagColors(colors);
  }, [project.tags]);

  return (
    <div className={styles.card} key={project.id}>
      <img src={project.image} alt={project.name} />
      <div className={styles.content}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={styles.tag}
              style={{ borderColor: tagColors[tag], color: tagColors[tag] }}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.links}>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer">
              Demo
            </a>
          )}
          {project.source_code && (
            <a href={project.source_code} target="_blank" rel="noreferrer">
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
