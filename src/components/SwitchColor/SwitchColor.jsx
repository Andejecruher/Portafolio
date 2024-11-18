
import { Switch, useMantineTheme, rem, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

export function SwitchColor() {
  const theme = useMantineTheme();
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  console.log(colorScheme);
  const sunIcon = (
    <IconSun
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.yellow[0]}
    />
  );

  const moonIcon = (
    <IconMoonStars
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.blue[0]}
    />
  );

  return <Switch checked={colorScheme === 'dark' ? true : false} size="md" color="dark" onLabel={sunIcon} offLabel={moonIcon} onChange={
    (value) => {
      setColorScheme(value.target.checked ? 'dark' : 'light');
    }
  } />;
}