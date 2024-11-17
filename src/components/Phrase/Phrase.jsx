import commillas from '@src/assets/comillas.svg';
import { Image, Container, Text } from '@mantine/core';
import classes from './Phrase.module.css';
import PropTypes from 'prop-types';

export function Phrase({ text, author }) {
  return (
    <section id="phrase" className={classes.contentCube}>
      <div className={classes.cube} />
      <Container size="md" className={classes.phraseContainer}>
        <div className={classes.phrase}>
          <Image src={commillas} className={classes.comillasTop} />
          <Text className={classes.text}>
            {text}
          </Text>
        </div>
        <div className={classes.reference}>
          <Image src={commillas} className={classes.comillasBottom} />
          <Text className={classes.text}>
            {author}
          </Text>
        </div>
      </Container>
    </section>
  );
};

Phrase.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};