import Link from "next/link";
import React from "react";

const SideProps = ({ test }) => {
  return (
    <>
      <h3>Static props</h3>
      <p>
        If you export a function called <code>getStaticProps</code> (Static Site Generation) from a page,
        Next.js will pre-render this page at build time using the props returned by getStaticProps.
      </p>
      <p>
        Static props is recomended for CMS sites
      </p>
      <h3>Server side props</h3>
      <p>
        <strong>getServerSideProps</strong> runs only on the server side
      </p>
      <p>
        The function will never run client-side
      </p>
      <p>
        The code you write inside <strong>getServerSide</strong> props won&apos;t even be included in the JS
        bundle that is sent to the browser
      </p>
      <h3>Get item by using dynamic params</h3>
      <Link href='/data-page/side-props/4' style={{color: '#0099cc'}}>Id=4</Link>
      <h4>Example</h4>
      <p><code>getServerSideProps</code> function calls the endpoint <code>https://jsonplaceholder.typicode.com/todos</code></p>
      <p>
        when navigating to <strong>data-page/side-props</strong> the nextjs receives the request, then runs
        <code>getServerSideProps</code> exported from the page, data is fetched and provided as props to the
        component, HTML from component is generated in the server and sent to the browser
      </p>
      <ul>
        {test.map(item => (<li key={item.id}>{item.title}</li>))}
      </ul>
    </>
  )
}

export default SideProps

export async function getServerSideProps() {
  const request = 'https://jsonplaceholder.typicode.com/todos';
  const response = await fetch(request)
  const data = await response.json()
  return {
    props: {
      test: data
    }
  }
}