import { useState, useContext } from "react"

import { useNavigate } from "react-router-dom"

import { AuthContext } from "../../context/AuthContext"

import "../../styles/auth.css"

function Login() {

  // State
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // Navigation
  const navigate = useNavigate()

  // Context Access
  const { login } = useContext(AuthContext)

  function handleLogin(e) {

    e.preventDefault()

    if (!email || !password) {
      alert("All fields required")
      return
    }

    const userData = {
      email,
    }

    // Calling login function from context
    login(userData)

    navigate("/dashboard")
  }

  return (
    <div className="auth-container">

      <form className="auth-form" onSubmit={handleLogin}>

        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  )
}

export default Login