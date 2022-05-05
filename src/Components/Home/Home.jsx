import React,{useState,useEffect} from 'react'
import {Table}from'react-bootstrap'
import axios from 'axios'

export default function Home() {
  
  const [val, setVal] = useState("");

  const getAnswer = async () => {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
    setVal(data.users);
  };

  useEffect(() => {
    getAnswer();
  }, []);
console.warn()

  return (
    <div>
       <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>{id}</th>
      <th>Last Name</th>
      <th>Username</th>
      <th>Operation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>{val}</td>
      <td>Panwar</td>
      <td>abc@123</td>
      <td>ghgjh</td>
    </tr>
   
  </tbody>
  
</Table>
    </div>
  )
}
