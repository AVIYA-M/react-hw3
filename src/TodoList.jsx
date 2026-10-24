import { useState } from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

function TodoList() {
  const [tasks, setTasks] = useState([
    { code: 1, title: 'שיעורי בית ריאקט', done: false },
    { code: 2, title: 'שיעורי בית פייתון', done: true },
    { code: 3, title: 'שיעורי בית אלגוריתמים', done: false },
  ])

  const handleAddTask = (newTitle) => {
    const trimmedTitle = newTitle.trim()

    if (!trimmedTitle) return

    const newTask = {
      code: Date.now(),
      title: trimmedTitle,
      done: false,
    }

    setTasks((prevTasks) => [...prevTasks, newTask])
  }

  const handleToggleDone = (taskCode) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.code === taskCode ? { ...task, done: true } : task
      )
    )
  }

  return (
    <div>
      <h1>רשימת משימות</h1>

      <TodoForm onAddTask={handleAddTask} />

      <ul>
        {tasks.map((task) => (
          <TodoItem
            key={task.code}
            task={task}
            onToggleDone={handleToggleDone}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList