"use client";
import Login from "../components/Login";
import Register from "@/components/Register";
import { useEffect, useState } from 'react';

export default function Landing() {

  const [data, setData] = useState([]);
  const [loginOrRegister, setLoginOrRegister] = useState('');

  useEffect(() => {
    fetch('/api/getData', {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleAction = () => {
    if (loginOrRegister === 'Register') {
      return <Register />
    } else if (loginOrRegister === 'Login') {
      return <Login />
    } else { return <h1>Login or Register</h1> }
  }


  return (
    <div>
      <h1 className='text-red-600'>Landing Page</h1>
      <h1>All Users: {JSON.stringify(data)}</h1>

      <button
        className="m-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
        onClick={() => setLoginOrRegister('Login')}>
        Login
      </button>
      <button 
      className="m-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
      onClick={() => setLoginOrRegister('Register')}>
        Register
        </button>
      {handleAction()}

    </div>
  )
}
