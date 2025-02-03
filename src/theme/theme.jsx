import { createTheme, rem } from '@mantine/core';

const theme = createTheme({
  baseHue: 230,
  baseSaturation: 10,
  focusRing: 'auto',
  colorScheme: 'dark',
  white: '#ffffff',
  black: '#ABB2BF',
  green: ['##98C379'],
  colors: {
    black: [
      "#eff5ff",
      "#e2e6ef",
      "#c6cbd5",
      "#a7afbc",
      "#8d96a7",
      "#7d879a",
      "#737f95",
      "#616d82",
      "#556176",
      "#46536a"
    ],
    orange: [
      "#ffeaed",
      "#fcd6d9",
      "#f0acb1",
      "#e57f87",
      "#dc5863",
      "#d7404c",
      "#d53240",
      "#bd2432",
      "#aa1d2b",
      "#951123"
    ],
    green: [
      "#98C379",
      "#e4f1da",
      "#c9e1b8",
      "#accf93",
      "#94c174",
      "#84b85f",
      "#7cb354",
      "#699d44",
      "#5c8c3a",
      "#4c792d"
    ],
    yellow: [
      "#E5C07A",
      "#f9ecd3",
      "#efd8aa",
      "#e6c27e",
      "#deaf58",
      "#d9a43f",
      "#d79e31",
      "#be8923",
      "#a9791b",
      "#93680e"
    ],
    blue: [
      "#e4f7ff",
      "#d0e9ff",
      "#a3d1f7",
      "#73b7f1",
      "#4ba1eb",
      "#3193e8",
      "#208ce8",
      "#0d79cf",
      "#006bba",
      "#005da6"
    ],
    purple: [
      "#C778DD",
      "#f1d8f8",
      "#dfafec",
      "#cc84e0",
      "#bc5fd6",
      "#b247d0",
      "#ae3bce",
      "#982db6",
      "#8826a3",
      "#771c90"
    ],
    cyan: [
      "#e2fcff",
      "#d5f2f5",
      "#b2e0e6",
      "#8bcfd7",
      "#6bbfca",
      "#55b6c2",
      "#46b2bf",
      "#349ca8",
      "#238b97",
      "#007984"
    ],
    gray: [
      "#eff5ff",
      "#e2e6ef",
      "#c6cbd5",
      "#a7afbc",
      "#8d96a7",
      "#7d879a",
      "#737f95",
      "#616d82",
      "#556176",
      "#46536a"
    ],
    violet: [
      "#fdedff",
      "#f1d8f8",
      "#deafec",
      "#cb84e0",
      "#bb5fd6",
      "#b147d0",
      "#ac3bce",
      "#972db6",
      "#8726a3",
      "#761d90"
    ],
    red: [
      "#ffeaed",
      "#fcd6d9",
      "#f0acb1",
      "#e57f87",
      "#dc5863",
      "#d7404c",
      "#d53240",
      "#bd2432",
      "#aa1d2b",
      "#951123"
    ]
  },
  primaryShade: { light: 6, dark: 8 },
  primaryColor: "purple",
  fontFamily: 'Fira Code',
  fontFamilyMonospace: 'monospace',
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
    from: 'gray',
    to: 'purple',
    deg: 90,
  },
  globalStyles: {
    body: {
      fontFamily: 'Fira Code, monospace',
    },
  },
  components: {
    Button: {
      styles: () => ({
        root: {
          backgroundColor: 'transparent',
          color: 'light-dark(#000, var(--mantine-color-white))',
          border: '1px solid #C778DD',
          display: 'inline-flex',
          padding: '8px 16px',
          alignItems: 'flex-start',
          gap: '10px',
          borderRadius: '0px',
          fontFamily: 'Fira Code, monospace',
          fontSize: rem(16),
          fontWeight: 500,
          lineHeight: 'normal',
        },
        outline: {
          backgroundColor: 'transparent',
          color: 'light-dark(#000, var(--mantine-color-white))',
          border: '1px solid #C778DD',
          display: 'inline-flex',
          padding: '8px 16px',
          alignItems: 'flex-start',
          gap: '10px',
          borderRadius: '0px',
          fontFamily: 'Fira Code, monospace',
          fontSize: rem(16),
          fontWeight: 500,
          lineHeight: 'normal',
        },
      }),
    },
    Card: {
      styles: () => ({
        root: {
          backgroundColor: 'transparent',
          color: 'light-dark(#000, var(--mantine-color-white))',
          border: '1px solid var(--gray, #abb2bf)',
          borderRadius: '0px',
          fontFamily: 'Fira Code, monospace',
          paddingRight: '0px',
          paddingLeft: '0px',
        },
      }),
    },
    TextInput: {
      styles: () => ({
        root: {
          color: 'light-dark(#000, var(--mantine-color-white))',
          fontFamily: 'Fira Code',
        },
      }),
    },
    Burger: {
      defaultProps: {
        color: 'light-dark(#000, var(--mantine-color-white))',
        fontFamily: 'Fira Code',
      },
      styles: (theme) => ({
        root: {
          color: 'light-dark(#000, var(--mantine-color-white))',
          fontFamily: 'Fira Code',
          '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray,
          },
        }
      }),
    },
  },
});

export default theme;