import React from "react";
import styled from 'styled-components'

const TroubleSooting = () => {
  return (
    <>
      <p>This is a log of issues faced through the building of this demo and the solution for them</p>
      <Table>
        <thead>
          <tr>
            <th>Issue</th>
            <th>Solution</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <p>
                Styles break and console shows<br /> <strong>next-dev.js?3515:20 Warning: Prop `className` did not match</strong>
              </p>
            </th>
            <th>
              Add styled components to next.config.js in the config obj<br />
              <div style={{ padding: '8px' }}>
                <code>
                  {'compiler: {'}<br />
                  {'styledComponents: true'}<br />
                  {'}'}
                </code>
              </div>

            </th>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

const Table = styled.table`
  thead,
  th {
    border: 1px solid gray;
    padding: 8px;
    text-align: left;
    font-weight: 400;
    font-size: 16px;
  }
  
`

export default TroubleSooting