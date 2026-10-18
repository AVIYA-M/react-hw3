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
                    <li>{task}</li>
                ))}
            </ul>
        </section>
    )
}

export default TodoList