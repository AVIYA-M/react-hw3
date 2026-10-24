import { useState } from 'react'
import TodoItem from './TodoItem'

function TodoList() {
  const [tasks, setTasks] = useState([
    { code: 1, title: 'שיעורי בית ריאקט', done: false },
    { code: 2, title: 'שיעורי בית פייתון', done: true },
    { code: 3, title: 'שיעורי בית אלגוריתמים', done: false },
  ])

  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const trimmedValue = inputValue.trim()
    if (!trimmedValue) return

    const newTask = {
      code: Date.now(),
      title: trimmedValue,
      done: false,
    }

    setTasks((prevTasks) => [...prevTasks, newTask])
    setInputValue('')
  }

  return (
    <div>
      <h1>רשימת משימות</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="הכנס משימה"
        />

        <button type="submit">אישור</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <TodoItem key={task.code} task={task} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList