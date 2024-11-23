import { Image, Container, Title, Button, Group, Text, List, rem, ThemeIcon, Skeleton } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { useBlog } from '@src/context/useBlog';
import PropTypes from 'prop-types';

import classes from './HeroBullets.module.css';

export function HeroBullets({ article }) {
  const { setArticle } = useBlog();
  const navigate = useNavigate();

  const tags = article && article.tags.map((tag) => (
    <List.Item key={tag.id}>
      {tag.name}
    </List.Item>
  ));

  const handleGetArticle = (article) => {
    setArticle(article);
    const slug = article.title.toLowerCase().replace(/ /g, '-');
    navigate(`/blog/${slug}`);
  }

  return (
    <section id="hero-bullets">
      <Container size="md">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              {article.title}
            </Title>
            <Text mt="md" className={classes.description}>
              {article.description}
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="md" color="indigo">
                  <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
                </ThemeIcon>
              }
              className={classes.list}
            >
              {tags}
            </List>

            <Group mt={30}>
              <Button
                color="initial"
                variant="outline"
                className={classes.button}
                onClick={() => handleGetArticle(article)}
              >
                {`Leer más -->`}
              </Button>
            </Group>
          </div>
          <Image src={article.thumbnail} className={`sm:w-[60%] ${classes.image}`} />
        </div>
      </Container>
    </section>
  );
}

HeroBullets.propTypes = {
  article: PropTypes.object,
};

export function HeroBulletsSkeleton() {
  return (
    <section id="hero-bullets">
      <Container size="md">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Skeleton height={40} width="60%" mb="md" />
            <Skeleton height={20} width="80%" mb="md" />
            <Skeleton height={20} width="80%" mb="md" />
            <Skeleton height={20} width="80%" mb="md" />

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="md" color="indigo">
                  <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
                </ThemeIcon>
              }
              className={classes.list}
            >
              <Skeleton height={20} width="100%" mb="sm" />
              <Skeleton height={20} width="100%" mb="sm" />
              <Skeleton height={20} width="100%" mb="sm" />
            </List>

            <Group mt={30}>
              <Skeleton height={36} width={120} />
            </Group>
          </div>
          <Skeleton height={356} width="60%" className={classes.image} />
        </div>
      </Container>
    </section>
  );
}