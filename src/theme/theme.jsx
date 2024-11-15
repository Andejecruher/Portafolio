import { createTheme, rem } from '@mantine/core';

const theme = createTheme({
  baseHue: 230,
  baseSaturation: 10,
  focusRing: 'auto',
  colorScheme: 'dark',
  white: '#ffffff',
  black: '#282C33',
  colors: {
    black: ['#282C33'],
    orange: ['#E06B74'],
    green: ['##98C379'],
    yellow: ['#E5C07A'],
    blue: ['#62AEEF'],
    purple: ['#C778DD'],
    cyan: ['#55B6C2'],
    gray: ['#ABB2BF'],
  },
  primaryShade: { light: 6, dark: 8 },
  primaryColor: "purple",
  fontFamily: 'Fira Code, monospace',
  fontFamilyMonospace: 'Fira Code, monospace',
  fontSizes: {
    xs: rem(10),
    sm: rem(11),
    md: rem(14),
    lg: rem(16),
    xl: rem(20),
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '32px',
    xl: '64px',
  },
  lineHeights: {
    xs: '1.4',
    sm: '1.45',
    md: '1.55',
    lg: '1.6',
    xl: '1.65',
  },
  headings: {
    // properties for all headings
    fontFamily: 'Fira Code, monospace',

    // properties for individual headings, all of them are optional
    sizes: {
      h1: { fontSize: rem(32) },
      h2: { fontSize: rem(24) },
      h3: { fontSize: rem(20) },
      h4: { fontSize: rem(18) },
      h5: { fontSize: rem(16) },
      h6: { fontSize: rem(14) },
    },
  },
  defaultGradient: {
    from: 'indigo',
    to: 'blue',
    deg: 45,
  },
  globalStyles: {
    body: {
      fontFamily: 'Fira Code, monospace',
      backgroundColor: '#282C33',
    },
  },
});

export default theme;