import { Breadcrumbs } from "@src/components/Breadcrumbs/Breadcrumbs";
import { GetInTouch } from "@src/components/ContactForm/GetInTouch";

const ContactPage = () => {

  return (
    <section id="contact">
      <Breadcrumbs title="Contacto" description="Ponte en contacto conmigo a través de este formulario." />
      <GetInTouch />
    </section>
  );
};

export default ContactPage;