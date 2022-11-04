import { items } from '../../data/items'

let data = [...items];

export default function handler(req, res) {
  const method = req.method || 'GET';
  switch (method) {
    case 'GET':
      res.status(200).json(data.filter(item => item))
      break;
    case 'POST':
      create(req, res)
      break;
    case 'PUT':
      update(req, res)
      break;
    case 'DELETE':
      deleteItem(req, res)
      break;
  }
}

function create(req, res) {
  const id = ++data.length;
  const item = {
    id,
    name: JSON.parse(req.body).name
  }
  data.push(item);
  res.status(200).json(item)
}

function update(req, res) {
  const {id, name} = JSON.parse(req.body);
  const currentItem = data.find(item => item?.id.toString() === id.toString())
  currentItem.name = name;
  res.status(200).json(currentItem)
}

function deleteItem(req, res) {
  const {id} = JSON.parse(req.body);
  data = data.filter(item => item.id.toString() !== id.toString())
  res.status(200).json(data)
}