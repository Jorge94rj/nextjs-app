import Head from "next/head";
import React from "react";

const HeadTags = () => {
  return (
    <>
      <Head>
        <title>Title set in title tag</title>
        <meta property="og:title" content="Title changed from meta tag" key="title" />
      </Head>
      <Head>
        <meta property="og:title" content="Title changed in a second meta tag" key="title" />
      </Head>
      <h1>Head example</h1>
      <code>
        <div>
          {'<Head>'}<br/>
          {'<title>My page title</title>'}<br/>
          {'<meta property="og:title" content="My page title" key="title" />'}<br/>
          {'</Head>'}<br/>
          {'<Head>'}<br/>
          {'<meta property="og:title" content="My new title" key="title" />'}<br/>
          {'</Head>'}<br/>
          {'<p>Hello world!</p>'}<br/>
        </div>
      </code>
      <h3>Head tag</h3>
      <p>
        only the second meta tag is rendered. meta tags with duplicate key attributes are automatically handled.
        The contents of head get cleared upon unmounting the component, so make sure each page completely defines
        what it needs in head, without making assumptions about what other pages added.
      </p>
      <h3>Layout</h3>
      <p>
        Layout component is shared between all pages from _app.js by nesting the component
      </p>
    </>
  )
}

export default HeadTags
