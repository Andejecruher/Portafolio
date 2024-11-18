import { Container, Group, SimpleGrid, Text, Image } from '@mantine/core';
import dots from '@src/assets/dots.svg';
import logo from '@src/assets/ajh.png';

import classes from './Skills.module.css';

export function Skills() {
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
    <section id="skills" className={classes.skills}>
      <Container size="md" justify="center" align='center' gap='sm'>
        <Group justify="space-between" align='center' mb="lg">
          <Text align="center" size="xl" className={classes.title}><span className='almohadilla'>#</span>Skills</Text>
          <div className={classes.line} />
        </Group>
        <SimpleGrid cols={{ base: 1, xs: 2, sm: 2, md: 2 }} spacing="lg">
          <div className={classes.decorations}>
            <Image src={dots} alt="dots" className={classes.dotsTop} />
            <div className={classes.cubeTop} />
            <Image src={logo} alt="logo" className={classes.logo} />
            <Image src={dots} alt="dots" className={classes.dotsBottom} />
            <div className={classes.cubeBottom} />
          </div>
          <div className={classes.skills}>
            <SimpleGrid cols={{ base: 2, sm: 2, md: 3 }}>
              {itemsSkills}
            </SimpleGrid>
          </div>
        </SimpleGrid>
      </Container>
    </section>
  );
};
