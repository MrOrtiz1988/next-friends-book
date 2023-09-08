"use client"
import React, { useState } from 'react';


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');

    return (
        <div>
            <form>
                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}