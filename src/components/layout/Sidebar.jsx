import "../../styles/sidebar.css"

import { NavLink } from "react-router-dom"

function Sidebar() {

  return (

    <div className="sidebar">

      <NavLink to="/dashboard">
        Dashboard
      </NavLink>

      <NavLink to="/tasks">
        Tasks
      </NavLink>

      <NavLink to="/profile">
        Profile
      </NavLink>

      <NavLink to="/settings">
        Settings
      </NavLink>

    </div>
  )
}

export default Sidebar