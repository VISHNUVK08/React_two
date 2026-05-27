import { useState, useMemo, useEffect } from "react"
import MainLayout from "../../components/layout/MainLayout"

import TaskCard from "../../components/common/TaskCard"

import Modal from "../../components/ui/Modal"

import useTasks from "../../hooks/useTasks"


function Tasks() {

  // Custom Hook
  const {
    tasks,
    setTasks,
    loading,
    error
  } = useTasks()

  // Input State
  const [taskInput, setTaskInput] = useState("")

  // Search State
  const [search, setSearch] = useState("")

  // Modal State
  const [openModal, setOpenModal] =
    useState(false)

  // Toast State
  const [toast, setToast] = useState("")

  // Add Task
  function handleAddTask() {

    if (!taskInput) return

    const newTask = {

      id: Date.now(),

      title: taskInput,

      completed: false
    }

    setTasks([...tasks, newTask])

    setTaskInput("")

    setToast("Task Added Successfully")

    setTimeout(() => {
      setToast("")
    }, 3000)
  }

  // Delete Task
  function handleDelete(id) {

    const filteredTasks = tasks.filter(
      (task) => task.id !== id
    )

    setTasks(filteredTasks)

    setToast("Task Deleted")

    setTimeout(() => {
      setToast("")
    }, 3000)
  }

  // Toggle Complete
  function handleToggleComplete(id) {

    const updatedTasks = tasks.map((task) => {

      if (task.id === id) {

        return {

          ...task,

          completed: !task.completed
        }
      }

      return task
    })

    setTasks(updatedTasks)
  }

  // Edit Task
  function handleEdit(id, updatedText) {

    const updatedTasks = tasks.map((task) => {

      if (task.id === id) {

        return {

          ...task,

          todo: updatedText,

          title: updatedText
        }
      }

      return task
    })

    setTasks(updatedTasks)

    setToast("Task Updated")

    setTimeout(() => {
      setToast("")
    }, 3000)
  }

useEffect(() => {

  localStorage.setItem(
    "tasks",
    JSON.stringify(tasks)
  )

}, [tasks])

  // Optimized Search Filtering
  const filteredTasks = useMemo(() => {

    return tasks.filter((task) =>

      (task.todo || task.title)

        ?.toLowerCase()

        .includes(search.toLowerCase())
    )

  }, [tasks, search])

  // Loading UI
  if (loading) {

    return <h2>Loading Tasks...</h2>
  }

  // Error UI
  if (error) {

    return <h2>{error}</h2>
  }

  return (

    <MainLayout>

      <h1>Tasks Page</h1>

      <br />

      {/* Task Input Section */}
      <div className="task-input-container">

        <input
          type="text"
          placeholder="Enter task"
          value={taskInput}
          onChange={(e) =>
            setTaskInput(e.target.value)
          }
        />

        <button onClick={handleAddTask}>
          Add Task
        </button>

        <button
          onClick={() => setOpenModal(true)}
        >
          Open Modal
        </button>

      </div>

      {/* Search Input */}
      <input
        className="search-input"
        type="text"
        placeholder="Search task"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <br />

      {/* Empty State */}
      {
        filteredTasks.length === 0 && (

          <h3>No Tasks Found</h3>
        )
      }

      {/* Render Tasks */}
      {
        filteredTasks.map((task) => (

          <TaskCard

            key={task.id}

            task={task}

            onDelete={handleDelete}

            onToggle={handleToggleComplete}

            onEdit={handleEdit}
          />

        ))
      }

      {/* Modal */}
      <Modal

        isOpen={openModal}

        title="Task Information"

        onClose={() =>
          setOpenModal(false)
        }
      >

        <p>Total Tasks: {tasks.length}</p>

      </Modal>

      {/* Toast */}
      {
        toast && (

          <div className="toast">

            {toast}

          </div>
        )
      }

    </MainLayout>
  )
}

export default Tasks