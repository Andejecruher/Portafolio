import { Breadcrumbs } from "@src/components/Breadcrumbs/Breadcrumbs";
import { AboutMe } from '@src/components/AboutMe/AboutMe';
import { SkillsAboutMe } from "@src/components/Skills/SkillsAboutMe";

const AboutMePage = () => {

  return (
    <section id="about-me">
      <Breadcrumbs title="Sobre Mi" description="Quién soy yo?" />
      <AboutMe section={false} />
      <SkillsAboutMe />
    </section>
  );
};

export default AboutMePage;