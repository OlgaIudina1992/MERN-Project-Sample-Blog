import { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch("http://localhost:5000/register", {
            method: "POST",
            body: JSON.stringify({username, password}),
            headers: {'Content-Type':'application/json'},
        });
        if (response.status === 200) {
            alert("Registered successfully!")
        } else {
            alert("Registration failed!")
        }
    }


    return (
    <>
        <div>
            <Link to={"/"}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-green-700">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            </Link>
        </div> 
        <form onSubmit={handleSubmit}>
        <div className="bg-green-700 p-28 gap-2 flex items-center justify-center w-3/5 h-2/5 mt-20 mx-80 rounded-2xl">
        <div className="flex flex-col w-2/5 h-2/5 mt-12">
            <h1 className="text-4xl text-white text-center mb-2">Register</h1>
                <input type="text" 
                        placeholder="username" 
                        id="username" 
                        value={username} 
                        onChange={event => setUsername(event.target.value)}/>
                <input type="password" 
                        placeholder="password" 
                        id="password" 
                        value={password}
                        onChange={event => setPassword(event.target.value)} />
                <button disabled={false} className="primary">Register</button>
                <Link to={"/login"}>
                <span className="text-white font-light hover:font-semibold">Already have an account? Sign in!</span>
                </Link>
        </div>
        </div>
        </form>
        </>
    )
    }