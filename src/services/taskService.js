import axios from "axios"

const BASE_URL =
  import.meta.env.VITE_API_URL
export async function fetchAllTasks() {

  const response = await axios.get(
    `${BASE_URL}/todos`
  )

  return response.data.todos
}