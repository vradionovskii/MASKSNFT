import ButtonCluster from "../components/ButtonCluster";
import Layout from "../components/layout";

const seo = {
  URL: "",
  siteTitle: "",
  siteDescription: "",
  socialCover: "images/",
  keywords: "",
  title: "",
};

export default function Index() {
  return (
    <Layout seo={seo}>
      <section id="hero-container">
        <div id="hero" className="relative">
          <ButtonCluster />
        </div>
      </section>
    </Layout>
  );
}
