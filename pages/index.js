import ToggleGroup from "../components/ToggleGroup";
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
        <div id="hero" className="">
          <ToggleGroup />
        </div>
      </section>
    </Layout>
  );
}
