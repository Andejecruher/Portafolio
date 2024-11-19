import { Breadcrumbs } from "@src/components/Breadcrumbs/Breadcrumbs";
import { Lastest } from "@src/components/Lastest/Lastest";
import { Skills } from "@src/components/Skills/Skills";

const BlogPage = () => {
  return (
    <section id="blog">
      <Breadcrumbs title="Blog" description="Mantente informado !" />
      <Lastest />
      <Skills />
    </section>
  );
};

export default BlogPage;