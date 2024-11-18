import { useState } from 'react';
import { Group, Burger, Drawer, Stack, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Logo from '@src/assets/ajh.png';
import classes from './HeaderMenu.module.css';
import { Link } from 'react-router-dom';
import { SwitchColor } from '@src/components/SwitchColor/SwitchColor';

const links = [
  { link: '/home', label: 'Home' },
  { link: '/projects', label: 'Proyectos' },
  { link: '/about', label: 'Sobre Mi' },
  { link: '/contact', label: 'Contacto' },
  { link: '/blog', label: 'Blog' },
];

const socialLinks = [
  {
    link: 'https://github.com/Andejecruher',
    label: 'GitHub',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5 6C9.69875 6 5 10.5882 5 16.2529C5 20.7899 8.00562 24.6219 12.1794 25.9804C12.7044 26.0701 12.9012 25.7625 12.9012 25.4934C12.9012 25.2499 12.8881 24.4425 12.8881 23.5838C10.25 24.058 9.5675 22.9558 9.3575 22.3791C9.23938 22.0843 8.7275 21.1743 8.28125 20.9308C7.91375 20.7386 7.38875 20.2644 8.26813 20.2516C9.095 20.2388 9.68563 20.9949 9.8825 21.3025C10.8275 22.8533 12.3369 22.4175 12.9406 22.1484C13.0325 21.4819 13.3081 21.0334 13.61 20.777C11.2737 20.5207 8.8325 19.6364 8.8325 15.7147C8.8325 14.5997 9.23938 13.6769 9.90875 12.9592C9.80375 12.7029 9.43625 11.6519 10.0138 10.2422C10.0138 10.2422 10.8931 9.97301 12.9012 11.2931C13.7413 11.0624 14.6338 10.947 15.5263 10.947C16.4188 10.947 17.3113 11.0624 18.1513 11.2931C20.1594 9.9602 21.0387 10.2422 21.0387 10.2422C21.6163 11.6519 21.2488 12.7029 21.1438 12.9592C21.8131 13.6769 22.22 14.5868 22.22 15.7147C22.22 19.6492 19.7656 20.5207 17.4294 20.777C17.81 21.0975 18.1381 21.7126 18.1381 22.6738C18.1381 24.0452 18.125 25.1474 18.125 25.4934C18.125 25.7625 18.3219 26.0829 18.8469 25.9804C20.9314 25.2935 22.7428 23.9854 24.026 22.2403C25.3092 20.4953 25.9996 18.4012 26 16.2529C26 10.5882 21.3013 6 15.5 6Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    link: 'https://www.linkedin.com/in/antonio-de-jes%C3%BAs-cruz-hern%C3%A1ndez-2535748b/',
    label: 'LinkedIn',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 5.719C4 4.7695 4.789 4 5.7625 4H26.2375C27.211 4 28 4.7695 28 5.719V26.281C28 27.2305 27.211 28 26.2375 28H5.7625C4.789 28 4 27.2305 4 26.281V5.719ZM11.4145 24.091V13.2535H7.813V24.091H11.4145ZM9.6145 11.773C10.87 11.773 11.6515 10.942 11.6515 9.901C11.629 8.8375 10.8715 8.029 9.6385 8.029C8.4055 8.029 7.6 8.839 7.6 9.901C7.6 10.942 8.3815 11.773 9.5905 11.773H9.6145ZM16.9765 24.091V18.0385C16.9765 17.7145 17.0005 17.3905 17.0965 17.1595C17.356 16.513 17.9485 15.8425 18.9445 15.8425C20.248 15.8425 20.7685 16.8355 20.7685 18.2935V24.091H24.37V17.875C24.37 14.545 22.594 12.997 20.224 12.997C18.313 12.997 17.4565 14.047 16.9765 14.7865V14.824H16.9525C16.9605 14.8115 16.9685 14.799 16.9765 14.7865V13.2535H13.3765C13.4215 14.2705 13.3765 24.091 13.3765 24.091H16.9765Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    link: 'https://x.com/Andejecruher',
    label: 'Twitter',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.2249 26C19.9045 26 24.6526 18.6883 24.6526 12.3587C24.6526 12.1541 24.6526 11.9466 24.6439 11.742C25.5683 11.0617 26.3661 10.2194 27 9.25459C26.1365 9.64165 25.2215 9.89676 24.2846 10.0116C25.2715 9.41189 26.0106 8.46827 26.3646 7.35615C25.4374 7.91461 24.4226 8.30664 23.3646 8.51509C22.6533 7.74493 21.712 7.23473 20.6866 7.0635C19.6612 6.89228 18.6089 7.06959 17.6927 7.56797C16.7764 8.06635 16.0474 8.85799 15.6185 9.82026C15.1896 10.7825 15.0848 11.8617 15.3203 12.8907C13.444 12.795 11.6084 12.2995 9.93262 11.4362C8.25682 10.5728 6.77823 9.36104 5.59275 7.87935C4.99093 8.93611 4.80726 10.1861 5.07905 11.3756C5.35085 12.565 6.05772 13.6047 7.05612 14.2835C6.30796 14.2576 5.57625 14.0534 4.92 13.6872V13.753C4.92129 14.86 5.2985 15.9326 5.98788 16.7895C6.67726 17.6464 7.63651 18.2351 8.7035 18.4559C8.2985 18.5694 7.88014 18.6259 7.46006 18.624C7.16391 18.6249 6.86836 18.597 6.57744 18.5407C6.87901 19.4937 7.46621 20.3269 8.25679 20.9236C9.04738 21.5203 10.0018 21.8507 10.9863 21.8685C9.3138 23.2039 7.24789 23.9282 5.12125 23.9247C4.74652 23.9263 4.37206 23.9044 4 23.859C6.15843 25.258 8.66512 26.0008 11.2249 26Z" fill="currentColor" />
      </svg>
    ),
  },
];

export function HeaderMenu() {
  const [opened, { open, close }] = useDisclosure(false);
  const [selected, setSelected] = useState('Home');

  const items = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.link}
        className={`${classes.link} ${selected === link.label ? classes.selected : ''}`}
        onClick={() => {
          setSelected(link.label);
        }}
      >
        <span className={classes.almohadilla}>#</span>{link.label}
      </Link>
    );
  });

  const itemsSocial = socialLinks.map((link) => {
    return (
      <a
        key={link.label}
        href={link.link}
        target='_blank'
        rel='noreferrer'
        className={classes.linkSocial}
      >
        {link.icon}
      </a>
    );
  });

  return (
    <section id='header' className={classes.headerContent}>
      <Container size="md">
        <header className={classes.header}>
          <section className={classes.inner}>
            <Link className={classes.spacer} to={'/home'}>
              <img src={Logo} alt="logo Andejecruher" className={classes.logo} />
              <p className={classes.title}>Andejecruher</p>
            </Link>

            <nav>
              <Group gap={5} visibleFrom="sm">
                {items}
              </Group>
            </nav>
            <Burger className={classes.burguer} opened={opened} onClick={open} size="sm" hiddenFrom="sm" aria-label="Open menu" />
            <Drawer opened={opened} onClose={close} title={
              <Group align="center" justify="space-between" style={{ padding: '0 16px' }}>
                <div className={classes.spacer}>
                  <img src={Logo} alt="logo Andejecruher" className={classes.logo} />
                  <p className={classes.title}>Andejecruher</p>
                </div>
                <SwitchColor hiddenFrom="sm" />
              </Group>
            }>
              {/* Drawer content */}
              <div className={classes.drawerContent}>
                <div className={classes.drawerInner}>
                  <Stack
                    className={classes.stack}
                    bg="var(--mantine-color-body)"
                    align="center" // Centrar horizontalmente
                    justify="center" // Centrar verticalmente
                    gap="md"
                  >
                    {items}
                  </Stack>
                  <Group justify="center" gap={12} className={classes.itemsSocial}>
                    {itemsSocial}
                  </Group>
                </div>
              </div>
            </Drawer>
          </section>
        </header>
      </Container>
    </section>
  );
}