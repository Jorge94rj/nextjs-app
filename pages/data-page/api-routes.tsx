import React, { useState } from "react";
import Card from "components/Card";
import styled from 'styled-components';

const ApiRoutes = () => {
  const [helloData, setHelloData] = useState('');
  const [nestedData, setNestedData] = useState('');
  const [items, setItems] = useState([]);
  const [itemToInsert, setItemToInsert] = useState(null);
  const [itemToUpdate, setItemToUpdate] = useState(null);
  const [idxToUpdate, setIdxToUpdate] = useState(null);
  const [idxToDelete, setIdxToDelete] = useState(null);

  const fetchData = async (route, setter) => {
    const response = await fetch(route)
    const data = await response.json()
    setter(data.name)
  }

  const getItems = async () => {
    const response = await fetch('/api/items')
    const data = await response.json()
    setItems(data)
  }

  const insertItem = async () => {
    const response = await fetch('/api/items', {
      method: 'POST',
      body: JSON.stringify(itemToInsert)
    })
    const data = await response.json();
    setItems([...items, data])
  }

  const deleteItem = async () => {
    if (!idxToDelete) {
      alert('invalid data')
      return;
    }
    const response = await fetch('/api/items', {
      method: 'DELETE',
      body: JSON.stringify({ id: idxToUpdate.name })
    })
    getItems()
  }

  const updateItem = async () => {
    if (!idxToUpdate || !itemToUpdate) {
      alert('invalid data')
      return;
    }
    const response = await fetch('/api/items', {
      method: 'PUT',
      body: JSON.stringify({ ...itemToUpdate, id: idxToUpdate.name })
    })
    await getItems()
  }

  const setItemValue = (e, setter) => {
    const value = e.target.value;
    setter({ name: value });
  }

  return (
    <>
      <h3>API Rotues</h3>
      <p>
        Next JS is a full stack framework. You can write the FE code in React and also write APIs
        that can be called by the front end code
      </p>
      <p>
        API routes allow you to create RESTful enpoints as part of your Next.js app folder structure
      </p>
      <p>
        You have to create a folder called api within the pages folder. There you can define all the APIs
        for your application
      </p>
      <p>
        Next JS gives you everything you need to write full-stack React + Node applications
      </p>
      <h3>
        Available APIs served from api
      </h3>
      <Container>
        <Card
          title="Get data from api/hello"
          description={helloData}
          action={() => fetchData('/api/hello', setHelloData)}
          size="small"
        />
        <Card
          title="Get data from api/nested-example"
          description={nestedData}
          action={() => fetchData('/api/nested-example', setNestedData)}
          size="small"
        />
      </Container>
      <h3>Local CRUD example</h3>
      <p>Data is stored locally and without persistance for this example</p>
      <Container>
        <FormControl>
          <strong>Available items</strong>
          <ul>
            {
              items.map((item) => (<li key={`li-${item.id}`}>id[{item.id}]{'=>'}{item.name}</li>))
            }
          </ul>
          <button onClick={getItems}>Get</button>
        </FormControl>
        <FormControl>
          <strong>Insert item</strong>
          <label>Name</label>
          <input onChange={(e) => setItemValue(e, setItemToInsert)} />
          <button onClick={insertItem}>Ok</button>
        </FormControl>
        <FormControl>
          <strong>Update item</strong>
          <label>Item Id</label>
          <input onChange={(e) => setItemValue(e, setIdxToUpdate)} />
          <label>New name</label>
          <input onChange={(e) => setItemValue(e, setItemToUpdate)} />
          <button onClick={updateItem}>Ok</button>
        </FormControl>
        <FormControl>
          <strong>Delete item</strong>
          <label>Item Id</label>
          <input onChange={(e) => setItemValue(e, setIdxToDelete)} />
          <button onClick={deleteItem}>Ok</button>
        </FormControl>
      </Container>
    </>
  )
}

export default ApiRoutes;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const FormControl = styled.div`
display: flex;
flex-direction: column;
width: 512px;
padding: 16px;
border: 1px solid gray;
border-radius: 8px;
margin: 24px;
button {
  margin-top: 24px;
}
`