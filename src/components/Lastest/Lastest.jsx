import { Container } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { HeroBullets, HeroBulletsSkeleton } from '@src/components/HeroBullets/HeroBullets';
import { useBlog } from '@src/context/useBlog';

import classes from "./Lastest.module.css";


export function Lastest() {
  const { latestPosts, loadingStatus, error } = useBlog();
  const { latestPosts: isLoading } = loadingStatus;


  if (isLoading) return <HeroBulletsSkeleton />;
  if (error) return <p>Error: {error}</p>;

  const slides = latestPosts && latestPosts.map((article) => (
    <Carousel.Slide key={article.id}>
      <HeroBullets article={article} />
    </Carousel.Slide>
  ));

  return (
    <section id="lastest">
      <Container size="md">
        <Carousel
          classNames={classes}
          slideGap="xs"
          controlsOffset="xs"
          controlSize={40}
          loop
          dragFree
          draggable={false}
          withIndicators
        >
          {slides}
        </Carousel>
      </Container>
    </section>
  );
}