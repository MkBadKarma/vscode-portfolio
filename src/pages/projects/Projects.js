import React from "react";
import styles from "./Projects.module.css";
import ProjectCard from "../../components/project-card/ProjectCard";
import vsCodePortfolioImage from "../../assets/project-images/vs-code-portfolio.png";
import YouTubeDownloaderImage from "../../assets/project-images/python.png";

const projectsData = [
  {
    id: 1,
    name: "YouTubeDownloader",
    image: YouTubeDownloaderImage,
    description:
      "A python script that lets you download videos or playlists from YouTube.",
    tags: ["Python", "Script", "yt-dlp", "Windows", "Linux"],
    source_code: "https://github.com/MkBadKarma/YouTubeDownloader",
  },
  {
    id: 2,
    name: "VSCode Portfolio",
    image: vsCodePortfolioImage,
    description:
      "A themeable and developer-centric portfolio with a sleek VS Code theme to showcase my work and skills.",
    tags: ["javascript", "react", "css-modules"],
    source_code: "https://github.com/MkBadKarma/vscode-portfolio",
    demo: "...",
  },
];

const Projects = () => {
  return (
    <>
      <h3>Stuff I've Built So Far</h3>
      <div className={styles.container}>
        {projectsData.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </>
  );
};

export default Projects;
