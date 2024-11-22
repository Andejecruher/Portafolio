import { useState } from 'react';
import { IconSearch } from '@tabler/icons-react';
import { Autocomplete, Burger, Group, Container, Collapse, ActionIcon, Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useBlog } from '@src/context/useBlog';
import classes from './HeaderSearch.module.css';


const HeaderSearchSkeleton = () => {
  return (
    <section id="header-search" className={classes.headerSearch}>
      <Container size="md">
        <header className={classes.header}>
          <div className={classes.inner}>
            <Group>
              <Group className={classes.links}>
                <Skeleton height={20} width={50} />
                <Skeleton height={20} width={50} />
                <Skeleton height={20} width={50} />
              </Group>
            </Group>
            <Group>
              <Skeleton height={40} width={40} />
            </Group>
          </div>
        </header>
      </Container>
    </section>
  );
}


export function HeaderSearch() {
  const { categories, setCategory, setSearch, loadingStatus } = useBlog();
  const { categories: isLoading } = loadingStatus;
  const [opened, { toggle }] = useDisclosure(false);
  const [selected, setSelected] = useState('Todas');
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    if (searchValue.trim() !== '') {
      setSearch(searchValue);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && searchValue.trim() !== '') {
      handleSearch();
    }
  };

  const handleCategory = (category) => {
    if (category === 'all') {
      setSelected('Todas');
      setCategory('all');
    } else {
      setSelected(category.name);
      setCategory(category);
    }
    toggle();
  };

  const items = categories.map((category) => (
    <a
      key={category.id}
      className={classes.link + (selected === category.name ? ` ${classes.active}` : '')}
      onClick={(event) => {
        event.preventDefault();
        handleCategory(category);
      }}
    >
      {category.name}
    </a>
  ));

  if (isLoading) return <HeaderSearchSkeleton />;


  return (
    <section id="header-search" className={classes.headerSearch}>
      <Container size="md">
        <header className={classes.header}>
          <div className={classes.inner}>
            <Group>
              <Group ml={50} gap={5} className={classes.links} visibleFrom="md">
                <a
                  key={0}
                  className={classes.link + (selected === 'Todas' ? ` ${classes.active}` : '')}
                  onClick={(event) => {
                    event.preventDefault();
                    handleCategory('all');
                  }}
                >
                  {'Todas'}
                </a>
                {items}
              </Group>
              <Autocomplete
                className={classes.search}
                placeholder="Search"
                leftSection={<ActionIcon onClick={handleSearch}>
                  <IconSearch size={16} stroke={1.5} />
                </ActionIcon>}
                data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
                hiddenFrom='md'
                value={searchValue}
                onChange={setSearchValue}
                onKeyDown={handleKeyDown}
              />
            </Group>
            <Group>
              <Autocomplete
                className={classes.search}
                placeholder="Search"
                leftSection={<ActionIcon onClick={handleSearch}>
                  <IconSearch size={16} stroke={1.5} />
                </ActionIcon>}
                data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
                visibleFrom="md"
                value={searchValue}
                onChange={setSearchValue}
                onKeyDown={handleKeyDown}
              />
              <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="md" />
            </Group>
          </div>
        </header>
        <Collapse in={opened} hiddenFrom="sm">
          <nav className={classes.mobileNav}>
            <a
              key={0}
              className={classes.link + (selected === 'Todas' ? ` ${classes.active}` : '')}
              onClick={(event) => {
                event.preventDefault();
                handleCategory('all');
              }}
            >
              {'Todas'}
            </a>
            {items}
          </nav>
        </Collapse>
      </Container>
    </section>
  );
}

