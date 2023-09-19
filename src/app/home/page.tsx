"use client";
import { useAppSelector } from "@/redux/store";
import { logOut } from '@/redux/features/auth-slice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { useRouter } from 'next/navigation';


export default function Home() {

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const username = useAppSelector(state => state.authReducer.value.username);

  const onClickLogOut = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    dispatch(logOut());
    router.push('/');
  };

    return (
      <div>
        <h1>Home Page</h1>
        <h1>Welcome: {username}</h1>
        <button onClick={onClickLogOut}>Log Out</button>
      </div>
    )
  }