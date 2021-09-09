import SEO from "./seo";

function Layout({ children, seo }) {
  return (
    <>
      <SEO seo={seo} />
      <main>{children}</main>
    </>
  );
}

export default Layout;
