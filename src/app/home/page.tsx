"use client";
import { useAppSelector } from "@/redux/store";

export default function Home() {

  const username = useAppSelector(state => state.authReducer.value.username);
  
    return (
      <div>
        <h1>Home Page</h1>
        <h1>Welcome: {username}</h1>
      </div>
    )
  }