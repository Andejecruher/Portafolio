import { Breadcrumbs } from "@src/components/Breadcrumbs/Breadcrumbs";
import { Lastest } from "@src/components/Lastest/Lastest";
import { HeaderSearch } from "@src/components/HeaderSearch/HeaderSearch";

const BlogPage = () => {
  return (
    <section id="blog">
      <Breadcrumbs title="Blog" description="Mantente informado !" />
      <Lastest />
      <HeaderSearch />

    </section>
  );
};

export default BlogPage;