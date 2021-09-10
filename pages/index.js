import ButtonCluster from "../components/ButtonCluster";
import Layout from "../components/layout";
import { Slider } from "../components/Slider";

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
          <Slider />
        </div>
      </section>
    </Layout>
  );
}
