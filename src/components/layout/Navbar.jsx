import "../../styles/navbar.css"

import { useState, useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

function Navbar() {

  const { logout } = useContext(AuthContext)
  const [darkMode, setDarkMode] = useState(false)

  function handleTheme() {

  setDarkMode(!darkMode)

  document.body.classList.toggle("dark")
}

  return (

    <nav className="navbar">

      <h2 className="navbar-title">
        Task Manager
      </h2>
<button onClick={handleTheme}>
  Theme
</button>
      <button
        className="logout-btn"
        onClick={logout}
      >
        Logout
      </button>

    </nav>
  )
}

export default Navbar