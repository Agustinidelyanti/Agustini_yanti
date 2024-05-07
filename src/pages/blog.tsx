import ProjectsDesc from "../components/Atoms/Descriptions/skillDesc";
import CardProject from "../components/Molecules/Cards/Card-Project";
import ProjectsContainer from "../components/Templates/Containers/Projects-Page/ProjectsContainer";
import ProjectsWrapper from "../components/Templates/Wrappers/Projects-Wrappers/ProjectsWrapper";
import { skillConfig } from "../config/skill-config";

export default function Projects() {
  return (
    <section id="projects">
      {/* Title */}
      <ProjectsDesc />

      {/* Showcase my Propjects */}
      <ProjectsContainer>
        {skillConfig.dataProjects.map((data, index) => {
          return (
            <ProjectsWrapper key={index}>
              <CardProject
                title={data?.title}
                imgSrc={data?.imgSrc}
                description={data?.description}
                technologies={data?.technologies}
                date={data?.date}
                directLink={data?.directLink}
              />
            </ProjectsWrapper>
          );
        })}
      </ProjectsContainer>
    </section>
  );
}
