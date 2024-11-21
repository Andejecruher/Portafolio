import { useEffect } from 'react';
import { Container } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { HeroBullets } from '@src/components/HeroBullets/HeroBullets';
import { useBlog } from '@src/context/useBlog';

import classes from "./Lastest.module.css";


export function Lastest() {
  const { articles, fetchArticles, isLoading, error } = useBlog();
  const TRANSITION_DURATION = 200;
  useEffect(() => {
    // Fetch the articles when the component mounts
    fetchArticles();
  }, []);

  if (isLoading) return <p>Cargando artículos...</p>;
  if (error) return <p>Error: {error}</p>;

  const slides = articles && articles.map((article) => (
    <HeroBullets key={article.id} article={article} />
  ));

  return (
    <section id="lastest">
      <Container size="lg">
        <Carousel
          classNames={classes}
          slideGap="xs"
          controlsOffset="xs"
          controlSize={40}
          loop
          dragFree
          draggable={false}
          withIndicators
          transitionProps={{ duration: TRANSITION_DURATION }}
        >
          {slides}
        </Carousel>
      </Container>
    </section>
  );
}