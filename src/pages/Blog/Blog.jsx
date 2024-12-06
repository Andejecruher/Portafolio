import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useBlog } from "@src/context/useBlog";
import { Breadcrumbs } from "@src/components/Breadcrumbs/Breadcrumbs";
import { Lastest } from "@src/components/Lastest/Lastest";
import { HeaderSearch } from "@src/components/HeaderSearch/HeaderSearch";
import { Posts } from "@src/components/Posts/Posts";

const BlogPage = () => {
  const { fetchAllData } = useBlog();

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <>
      <Helmet>
        <meta
          property="og:title"
          content="Andejecruher - Blog" />
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
          content="Andejecruher - Blog" />
        <meta
          name="twitter:description"
          content="Soy Andejecruher, un desarrollador full stack en constante crecimiento, compartiendo recursos y proyectos sobre programación y superación personal." />
        <meta
          name="twitter:image"
          content="https://backend.andejecruher.com/api/images/portafolio-DkIC-C5t.png" />
        <meta property="fb:app_id" content="546592754922069" />
        <title>Andejecruher - Blog</title>
      </Helmet>
      <section id="blog">
        <Breadcrumbs title="Blog" description="Mantente informado !" />
        <Lastest />
        <HeaderSearch />
        <Posts />
      </section>
    </>

  );
};

export default BlogPage;