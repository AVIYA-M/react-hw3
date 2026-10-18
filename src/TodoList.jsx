import TodoItem from './TodoItem'

function TodoList() {
    const tasks = [
        'שיעורי בית ריאקט',
        'שיעורי בית פייתון',
        'שיעורי בית אלגורתימים',
    ]

    return (
        <section className="todo-list">
            <h1>המשימות שלי</h1>

            <ul>
                {tasks.map((task) => (
                    <TodoItem key={task} task={task} />
                ))}
            </ul>
        </section>
    )
}

export default TodoList