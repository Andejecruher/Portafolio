import { Text, Box, Stack, rem } from '@mantine/core';
import { IconSun, IconPhone, IconMapPin, IconBrandTelegram } from '@tabler/icons-react';
import Prototypes from 'prop-types';

import classes from './ContactIcons.module.css';

function ContactIcon({ icon: Icon, title, description, ...others }) {
  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon style={{ width: rem(24), height: rem(24) }} stroke={2} />
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

const MOCKDATA = [
  { title: 'Correo', description: 'andejecruher@gmail.com', icon: IconBrandTelegram },
  { title: 'Telefono', description: '+52 322 318 8252', icon: IconPhone },
  { title: 'Ubicacion', description: 'Puerto Vallarta, Jalisco', icon: IconMapPin },
  { title: 'Horas de trabajo', description: '9 a.m. – 6 p.m.', icon: IconSun },
];

export function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
  return <Stack>{items}</Stack>;
}

ContactIcon.propTypes = {
  icon: Prototypes.elementType.isRequired,
  title: Prototypes.string.isRequired,
  description: Prototypes.string.isRequired,
};