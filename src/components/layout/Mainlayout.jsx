import "../../styles/layout.css"

import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

function MainLayout({ children }) {

  return (

    <div>

      <Navbar />

      <div className="layout-container">

        <Sidebar />

        <main className="layout-content">
          {children}
        </main>

      </div>

    </div>
  )
}

export default MainLayout