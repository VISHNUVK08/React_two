import { useState, useEffect } from "react"

import { fetchAllTasks } from "../services/taskService"

function useTasks() {

  const [tasks, setTasks] = useState([])

  const [loading, setLoading] = useState(false)

  const [error, setError] = useState("")

  useEffect(() => {

    async function loadTasks() {

      try {

        setLoading(true)

        const savedTasks =
          localStorage.getItem("tasks")

        if (savedTasks) {

          setTasks(JSON.parse(savedTasks))

          return
        }

        const data = await fetchAllTasks()

        setTasks(data)

      } catch (err) {

        setError("Failed to fetch tasks")

      } finally {

        setLoading(false)

      }
    }

    loadTasks()

  }, [])

  return {
    tasks,
    setTasks,
    loading,
    error
  }
}

export default useTasks