import React from "react";
import Footer from "components/Footer";

const FooterPage = () => {
  return (
    <>
      <h3>Header & Footer</h3>
      <p>Header is shared in all pages for this project</p>
      <p>Footer component can be reused from any component</p>
      <p>This page includes Footer component from components/footer</p>
      <Footer />
    </>
  )
}

export default FooterPage