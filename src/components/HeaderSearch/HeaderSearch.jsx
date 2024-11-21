import { IconSearch } from '@tabler/icons-react';
import { Autocomplete, Burger, Group, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderSearch.module.css';

const links = [
  { key: 'about', link: '/about', label: 'Features' },
  { key: 'pricing', link: '/pricing', label: 'Pricing' },
  { key: 'learn', link: '/learn', label: 'Learn' },
  { key: 'community', link: '/community', label: 'Community' },
];

export function HeaderSearch() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <a
      key={link.key}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <section id="header-search">
      <Container size="md">
        <header className={classes.header}>
          <div className={classes.inner}>
            <Group>
              <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
                {items}
              </Group>
              <Autocomplete
                className={classes.search}
                placeholder="Search"
                leftSection={<IconSearch size={16} stroke={1.5} />}
                data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
                visibleFrom="xs"
              />
            </Group>
            <Group>
              <Autocomplete
                className={classes.search}
                placeholder="Search"
                leftSection={<IconSearch size={16} stroke={1.5} />}
                data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
                visibleFrom="md"
              />
              <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
            </Group>
          </div>
        </header>
      </Container>
    </section>
  );
}