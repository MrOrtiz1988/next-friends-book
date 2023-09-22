"use client";
import { useState } from 'react';
import { logIn } from '@/redux/features/auth-slice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { useRouter } from 'next/navigation';

export default function Register() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch<AppDispatch>();

    const onClickLogIn = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        dispatch(logIn(username));
        router.push('/home');
    };

    return (
        <div>
            <h1>Register Here!</h1>
            <form>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    className='text-green-500'
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className='text-green-500'
                />
                <button onClick={onClickLogIn} type="submit">Login</button>
            </form>
        </div>
    )
}