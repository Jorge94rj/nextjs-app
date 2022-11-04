import Link from "next/link";
import React from "react";

const StaticPath = ({ test }) => {
  return (
    <>
      <h3>context.params.id = 4</h3>
      <ul>
        <li>id=&gt;{test.id}</li>
        <li>title=&gt;{test.title}</li>
        <li>completed=&gt;{test.completed.toString()}</li>
      </ul>
      <Link href="/data-page/static-path" style={{color: '#0099cc'}}>go back</Link>
    </>
  )
}

export default StaticPath

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { id: '1' }
      },
      {
        params: { id: '2' }
      },
      {
        params: { id: '4' }
      },
    ],
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const request = `https://jsonplaceholder.typicode.com/todos/${id}`;
  const response = await fetch(request)
  const data = await response.json()
  return {
    props: {
      test: data
    }
  }
}