import { Helmet } from "react-helmet-async";
import { Breadcrumbs } from "@src/components/Breadcrumbs/Breadcrumbs";
import { GetInTouch } from "@src/components/ContactForm/GetInTouch";

const ContactPage = () => {

  return (
    <>
      <Helmet>
        <meta
          property="og:title"
          content="Andejecruher - Contacto" />
        <meta
          property="og:description"
          content="Explora mi trayectoria como desarrollador full stack, conoce mis proyectos y obtén recursos sobre programación y superación personal." />
        <meta
          property="og:image"
          content="https://backend.andejecruher.com/api/images/portafolio-DkIC-C5t.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://www.andejecruher.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Andejecruher - Contacto" />
        <meta
          name="twitter:description"
          content="Soy Andejecruher, un desarrollador full stack en constante crecimiento, compartiendo recursos y proyectos sobre programación y superación personal." />
        <meta
          name="twitter:image"
          content="https://backend.andejecruher.com/api/images/portafolio-DkIC-C5t.png" />
        <meta property="fb:app_id" content="546592754922069" />
        <title>Andejecruher - Contacto</title>
      </Helmet>
      <section id="contact">
        <Breadcrumbs title="Contacto" description="Ponte en contacto conmigo a través de este formulario." />
        <GetInTouch />
      </section>
    </>
  );
};

export default ContactPage;