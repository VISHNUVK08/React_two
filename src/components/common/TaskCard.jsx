import "../../styles/tasks.css"
import { useState } from "react"

function TaskCard({
  task,
  onDelete,
  onToggle
}) {
    
const [isEditing, setIsEditing] = useState(false)

const [editText, setEditText] = useState(
  task.todo || task.title
)
function handleSave() {

  onEdit(task.id, editText)

  setIsEditing(false)
}

  return (

    <div className="task-card">

      <div>

       {
  isEditing ? (

    <input
      type="text"
      value={editText}
      onChange={(e) =>
        setEditText(e.target.value)
      }
    />

  ) : (

    <h3
      style={{
        textDecoration: task.completed
          ? "line-through"
          : "none"
      }}
    >
      {task.todo || task.title}
    </h3>

  )
}
      </div>

      <div className="task-actions">

        <button
          onClick={() => onToggle(task.id)}
        >
          {task.completed
            ? "Undo"
            : "Complete"}
        </button>
            {
  isEditing ? (

    <button onClick={handleSave}>
      Save
    </button>

  ) : (

    <button
      onClick={() =>
        setIsEditing(true)
      }
    >
      Edit
    </button>

  )
}
        <button
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>

      </div>

    </div>
  )
}

export default TaskCard