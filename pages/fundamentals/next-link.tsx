import Link from "next/link";
import React from "react";
import styled from 'styled-components'

const NextLink = () => {
  return (
    <>
      <h1>Link tag</h1>
      Client-side transitions between routes can be enabled via the Link component exported by next/link.<br />
      <div style={{ padding: '16px' }}>
        <code>{'<Link href="/">Home</Link>'}</code>
      </div>
      <h3>Examples</h3>
      <ul>
        <ListItem>
          <Link href="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link href="/fundamentals">Pages & Routing</Link>
        </ListItem>
      </ul>
    </>
  );
}

const ListItem = styled.li`
  margin: 4px;
  &: hover {
    color: #0099cc;
  }
`

export default NextLink
