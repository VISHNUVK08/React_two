import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "../pages/auth/Login"
import Signup from "../pages/auth/Signup"
import ProtectedRoute from "./ProtectedRoute"

import { lazy, Suspense } from "react"

const Dashboard = lazy(() =>
  import("../pages/dashboard/Dashboard")
)

const Tasks = lazy(() =>
  import("../pages/dashboard/Tasks")
)

const Profile = lazy(() =>
  import("../pages/dashboard/Profile")
)

const Settings = lazy(() =>
  import("../pages/dashboard/Settings")
)

import NotFound from "../pages/NotFound"

function AppRoutes() {
  return (
    <BrowserRouter>


    <Suspense fallback={<h2>Loading Page...</h2>}>

     <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

        <Route path="/tasks" element={<ProtectedRoute><Tasks /></ProtectedRoute>} />

        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute >} />

        <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />

        <Route path="*" element={<NotFound />} />

      </Routes>
      </Suspense>

    </BrowserRouter>
  )
}

export default AppRoutes