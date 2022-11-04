import React from "react"
import Card from 'components/Card'

const Aliases = () => {
  return (
    <>
      <h1>Aliases</h1>
      <p>
        Module aliases are very useful to import modules like this <strong>components/card</strong>
        &nbspc; instead of <strong>../components/card</strong>
      </p>
      <Card
        title="Example"
        description="This component was added from 'components' alias"
        action={() => ({})}
      />
      This can be achieved changing tsconfig.json or jsconfig.json adding the next snippet
      <div style={{ margin: '16px' }}>
        <fieldset>
          <code>
            {`"baseUrl": ".",`}<br />
            {`"paths": {`}<br />
            {`"@/components/*": ["components/*"]`}<br />
            {`}`}
          </code>
        </fieldset>
      </div>
      inside <code>compilerOptions</code>
    </>
  )
}

export default Aliases