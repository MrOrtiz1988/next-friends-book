"use client";
import Login from "../components/Login";
import { useEffect, useState } from 'react';

export default function Landing() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/getData', {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  console.log(data);
  

  return (
    <div>
      <h1 className='text-red-600'>Landing Page</h1>
      <h1>All Users: {JSON.stringify(data)}</h1>
      <Login />
    </div>
  )
}
