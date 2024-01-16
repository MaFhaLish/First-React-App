function ItemsList({ todoData }) {
  return (
    <div>
      <ul>
        {todoData.map((todo, index) => {
          return (
            <li
              key={index}
              className={`listItem ${todo.completed ? "selected" : ""}`}
            >
              {todo.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ItemsList;
