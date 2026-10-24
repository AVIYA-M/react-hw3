function getTaskColor(done) {
  if (done) return '#8fe39d'
  return '#f4a6a6'
}

function TodoItem({ task }) {
  const { title, done } = task

  return (
    <li
      style={{
        backgroundColor: getTaskColor(done),
        listStyle: 'none',
        marginBottom: '8px',
        padding: '10px',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <span>{title}</span>
    </li>
  )
}

export default TodoItem