import { Container, Group, SimpleGrid, Text, Image, Grid } from '@mantine/core';
import dots from '@src/assets/dots.svg';
import logo from '@src/assets/ajh.png';

import classes from './Skills.module.css';

export function SkillsAboutMe() {
  const skills = [
    {
      title: 'Languages',
      skills: 'HTML CSS JAVASCRIPT PYTHON PHP C#'
    },
    {
      title: 'Data bases',
      skills: 'MONGODB SQL MYSQL'
    },
    {
      title: 'Frameworks',
      skills: 'VUEJS REACT NODEJS EXPRESS NEXTJS GRAPHQL'
    },
    {
      title: 'Libraries',
      skills: 'MUI BOOTSTRAP TAILWINDCSS MANTINE VUETIFY '
    },
    {
      title: 'Tools',
      skills: 'FIGMA VSCODE POSTMAN INSOMNIA GITHUB DBAVER'
    },
    {
      title: 'Otros',
      skills: 'GIT NETLIFY VERCCEL'
    }
  ];

  const itemsSkills = skills.map((skill, index) => (
    <div key={index} className={classes.card}>
      <Text className={classes.cardTitle}>
        {skill.title}
      </Text>
      <Text className={classes.cardText}>
        {skill.skills}
      </Text>
    </div>
  ));

  return (
    <section id="skills-about-me" className={classes.skills}>
      <Image src={dots} alt="dots" className={classes.dotsTopList} />
      <Container size="md" justify="center" align='center' gap='sm'>
        <Group justify="space-between" align='center' mb="lg">
          <Text align="center" size="xl" className={classes.title}><span className='almohadilla'>#</span>Skills</Text>
        </Group>
        <SimpleGrid cols={{ base: 1, xs: 2, sm: 3, md: 5 }} spacing="lg">
          {itemsSkills}
        </SimpleGrid>
      </Container>
      <Container size="md" justify="center" align='center' gap='sm' className={classes.myFunFacts}>
        <Group justify="space-between" align='center' mb="lg">
          <Text align="center" size="xl" className={classes.title}><span className='almohadilla'>#</span>Datos divertidos</Text>
        </Group>
        <Grid>
          <Grid.Col span={{ base: 12, sm: 8, md: 8 }}>
            <div className={classes.facts__content}>
              <ul className={classes.facts__list}>
                <li className={classes.fact}>Me encanta programar</li>
                <li className={classes.fact}>Prefiero el diseño organizado</li>
                <li className={classes.fact}>Me gusta aprender sobre nuevas tecnologías</li>
                <li className={classes.fact}>Tengo un interés por la pesca</li>
                <li className={classes.fact}>Me gusta jugar LOL</li>
                <li className={classes.fact}>Disfruto colaborar con comunidades de programación</li>
              </ul>
            </div>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 4, md: 4 }}>
            <div className={classes.decorationsList}>
              <Image src={dots} alt="dots" className={classes.dotsTop} />
              <Image src={logo} alt="logo" className={classes.logoList} />
              <div className={classes.cubeBottomList} />
            </div>
          </Grid.Col>
        </Grid>
      </Container>
      <div className={classes.cubeBottomListP} />
    </section>
  );
};
