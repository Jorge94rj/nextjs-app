import React from "react";

const ContentTypePage = () => {
  return(
    <>
      <h3>Content types are managed from contentful</h3>
      <p>
        This project has three Content Types which are
      </p>
      <ul>
        <li style={{color: '#0099cc'}}>
          <a href="https://app.contentful.com/spaces/esdrnduoy886/content_types/blogPost/fields">
            Blog Post
          </a>
        </li>
        <li style={{color: '#0099cc'}}>
          <a href="https://app.contentful.com/spaces/esdrnduoy886/content_types/movie/fields">
            Movie
          </a>
        </li>
        <li style={{color: '#0099cc'}}>
          <a href="https://app.contentful.com/spaces/esdrnduoy886/content_types/person/fields">
            Person
          </a>
        </li>
      </ul>
      <p>Each content type has its own properties and they&apos;re useful for creating new entries</p>
    </>
  )
}

export default ContentTypePage