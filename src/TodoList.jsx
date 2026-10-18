import { useState } from 'react'

function TodoList() {
    const [tasks, setTasks] = useState([
        'שיעורי בית ריאקט',
        'שיעורי בית פייתון',
        'שיעורי בית אלגוריתמים',
    ])

    const [newTask, setNewTask] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!newTask.trim()) return

        const trimmedTask = newTask.trim()

        if (tasks.includes(trimmedTask)) return

        setTasks((prev) => [...prev, trimmedTask])
        setNewTask('')
    }

    return (
        <section className="todo-list">
            <h1>המשימות שלי</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newTask}
                    onChange={(event) => setNewTask(event.target.value)}
                    placeholder="הכנס משימה"
                />
                <button type="submit">אישור</button>
            </form>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </section>
    )
}

export default TodoList