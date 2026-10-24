function getTaskColor(done) {
  if (done) return '#8fe39d'
  return '#f4a6a6'
}

function TodoItem({ task, onToggleDone }) {
  const { code, title, done } = task

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

      {!done && (
        <button type="button" onClick={() => onToggleDone(code)}>
          המשימה בוצעה
        </button>
      )}
    </li>
  )
}

export default TodoItem