import Search from "@/components/Search";
import React, { useEffect, useState } from "react";
import fetchEntries from "utils/fetchEntries";
import Image from 'next/image';
import styled from 'styled-components';

const SearchPage = ({fields}) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(fields);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const filterHandler = (value) => {
    if (value !== '') {
      const filter = fields.filter(item => {
        return item.title.toLowerCase().includes(value.toLowerCase());
      });
      setFilteredData(filter);
    } else {
      setFilteredData(fields);
    }
  }

  return (
    <>
      <h3>Events</h3>
      <p>
        This page contains <code>Search</code> component wich returns the word typed when
        enter key event is triggered
      </p>
      <p>
        The word returned is used to filter the data in the client after the request is done
      </p>
      <p>
        When typing <code>onChange</code> event is called, if value is &lsquo;&lsquo; search
        is cleared
      </p>
      <Search onFilter={filterHandler} />
      {
        filteredData.map((item, idx) => (
          <RowItem key={idx}>
            <ImageContainer>
              <Image src={`http:${item.image}`} alt={item.title} width="32" height="32" />
            </ImageContainer>
            <TitleContainer>
              {item.title}
            </TitleContainer>
          </RowItem>
        ))
      }
    </>
  )
}

export default SearchPage

const RowItem = styled.div`
  display: flex;
  border: 1px solid gray;
  border-radius: 8px;
  height: 48px;
  margin: 8px;
  padding: 8px;
`;

const ImageContainer = styled.div`
`

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-left: 24px;
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