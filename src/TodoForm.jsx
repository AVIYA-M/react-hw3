import { useState } from 'react'

function TodoForm({ onAddTask }) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const trimmedValue = inputValue.trim()
    if (!trimmedValue) return

    onAddTask(trimmedValue)
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="הכנס משימה"
      />

      <button type="submit">אישור</button>
    </form>
  )
}

export default TodoForm