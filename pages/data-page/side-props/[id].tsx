import React from "react";

const SideProps = ({ test }) => {
  return (
    <>
      <h3>context.params.id = 4</h3>
      <p>
        param is passed to <code>getServerSideProps</code> in order to search one item by id and pass data to
        the component
      </p>
      <ul>
        <li>id=&gt;{test.id}</li>
        <li>title=&gt;{test.title}</li>
        <li>completed=&gt;{test.completed.toString()}</li>
      </ul>
    </>
  )
}

export default SideProps

export async function getServerSideProps({ params }) {
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