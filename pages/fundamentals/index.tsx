import React from "react"

const About = () => {
  return (
    <>
      <h1>Routing in Next.js</h1>
      <p>
        Next has File-system based routing mechanism. When a file is added to the pages folder in a project, it
        automatically becomes available as a route
      </p>
      <h1>Pages & Routing</h1>
      <p>
        This page can be accesed from <strong>/fundamentals</strong> directly in the url or from the <strong>Fundamentals</strong> menu in the
        navbar<br />
        This is a test of basic routing which is handled by next.js trough file system (every file inside pages folder
        will be mapped as an available route)
      </p>
    </>
  )
}

export default About