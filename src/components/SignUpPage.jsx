import React from 'react'
import { FaReact } from "react-icons/fa";
import '../style/style.css'

function SignUpPage() {
    return (
        <>
            <div className="circle"></div>
            <div className="card">
                <div className="logo">
                    <FaReact/>
                </div>
                <h2>Create Account</h2>
                <form className="form">
                    <input type="text" placeholder='Name' />
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <button type="submit">SIGN UP</button>
                </form>
                <footer>
                    Existing users, Sign in
                    <a href="#">Here</a>
                </footer>
            </div>
        </>
  )
}

export default SignUpPage