import React from 'react'
import fetchEntries from '../../utils/fetchEntries';
import Image from 'next/image';
import styled from 'styled-components'

const CMSPage = (props) => {

  const { fields } = props;

  return (
    <>
      <h1>Data fetched from Contentful</h1>
      <h3>Movies</h3>
      <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr)', gridGap: '8px' }}>
        {fields.map((item, idx) => (
          <div key={`movie-${idx}`}>
            <RowItem >
              <li>
                <strong>{item.title}</strong>
              </li>
              <Image src={`http:${item.image}`} alt={item.title} width="150" height="200" />
            </RowItem>
          </div>
        ))
        }
      </ul>
      <p>
        <a href='https://app.contentful.com/spaces/esdrnduoy886/entries?id=o5XOgf8VCeDngXBL&contentTypeId=movie&order.fieldId=updatedAt&order.direction=descending&displayedFieldIds=contentType&displayedFieldIds=updatedAt&displayedFieldIds=author&page=0'
          style={{ color: '#0099cc' }}
          rel="noreferrer"
          target="_blank">
          Update content here
        </a>
      </p>
    </>
  )
}

const RowItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid green;
  border-radius: 8px;

  li {
    list-style: none;
    text-align: center;
    margin-bottom: 16px;
  }

  img {
    margin: auto;
  }
`

export async function getStaticProps() {
  const entries = await fetchEntries();
  let data = entries.filter((item) =>
    item.sys.contentType.sys.id === 'movie'
  )
  const fields = data.map((item) => ({
    title: item.fields.title.content[0].content[0].value,
    image: item.fields.image.fields.file.url
  }));
  return {
    props: {
      fields,
      data: data
    }
  }

}

export default CMSPage;