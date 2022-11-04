import Link from "next/link";
import React from "react";

const SideProps = ({ test }) => {
  return (
    <>
      <h3>Static path</h3>
      <p>
        this page redirects to <code>static-path/id</code> where <code>getStaticProps</code> is called and
        <code> getStaticPaths</code> function needs to be implemented in order to avoid error because of the
        pre-rendering
      </p>
      <h3>Get item by using dynamic params</h3>
      <ul>
        <li>
          <Link href='/data-page/static-path/1' style={{ color: '#0099cc' }}>Id=1</Link>
        </li>
        <li>
          <Link href='/data-page/static-path/2' style={{ color: '#0099cc' }}>Id=2</Link>
        </li>
        <li>
          <Link href='/data-page/static-path/4' style={{ color: '#0099cc' }}>Id=4</Link>
        </li>
      </ul>
    </>
  )
}

export default SideProps