import ButtonCluster from "../components/ButtonCluster";
import Layout from "../components/layout";
import { Slider } from "../components/Slider";

const seo = {
  URL: "",
  siteTitle: "MASKSNFT",
  siteDescription: "MASKSNFT",
  socialCover: "/images/social-cover.jpg",
  keywords: "MASKSNFT",
  title: "Home",
};

export default function Index() {
  return (
    <Layout seo={seo}>
      <section id="hero-container" className="min-h-screen p-[0.3125rem]">
        <div
          id="hero"
          className="relative transition-colors duration-200 bg-no-repeat rounded-3xl"
        >
          <ButtonCluster />
          <Slider />
        </div>
      </section>
    </Layout>
  );
}
