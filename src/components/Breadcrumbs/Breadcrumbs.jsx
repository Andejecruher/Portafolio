import { Container } from '@mantine/core';
import PropTypes from 'prop-types';

import classes from './Breadcrumbs.module.css';

export function Breadcrumbs({ title, description }) {
  return (
    <Container size="md">
      <div className={classes.breadcrumbs}>
        <h1 className={classes.breadcrumbsTitle}><span>/</span>{title}</h1>
        <p className={classes.breadcrumbsDescription}>{description}</p>
      </div>
    </Container>
  );
};

Breadcrumbs.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
