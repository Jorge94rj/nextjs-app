import React, { useState } from "react";
import { SearchInput } from "./index.style";

const Search = ({onFilter}) => {
  const [value, setValue] = useState('');

  const changeHandler = (e) => {
    const value = e.target.value
    setValue(value)
    if (value === '') {
      onFilter(value)
    }
  }

  const keyHandler = (e) => {
    if (e.key === 'Enter') {
      onFilter(value);
    }
  }

  return (
    <SearchInput placeholder='Search' onChange={changeHandler} onKeyUp={keyHandler} />
  )
}

export default Search