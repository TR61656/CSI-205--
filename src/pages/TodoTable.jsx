import React, { useState, useEffect } from "react";

export default function TodoTable() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [itemsPerPage, setItemsPerPage] = useState(5);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  const filteredTodos =
    filter === "completed"
      ? todos.filter((t) => t.completed)
      : filter === "waiting"
      ? todos.filter((t) => !t.completed)
      : todos;

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold text-pink-800 mb-6">
        📝 Todo Management
      </h1>

      <div className="flex justify-between w-full max-w-4xl mb-4 items-center">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            onChange={(e) =>
              setFilter(e.target.checked ? "waiting" : "all")
            }
          />
          <label className="text-pink-700 font-semibold">Show only</label>
          <span className="px-3 py-1 bg-pink-200 rounded-full text-pink-900 text-sm font-semibold">
            Waiting 💖
          </span>
        </div>

        <select
          className="border border-pink-400 rounded-lg px-3 py-1 text-pink-800 bg-pink-100"
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
        >
          <option value={5}>5 items per page</option>
          <option value={10}>10 items per page</option>
          <option value={20}>20 items per page</option>
        </select>
      </div>

      <div className="w-full max-w-4xl bg-white rounded-xl shadow-md overflow-hidden border border-pink-200">
        <table className="w-full text-left border-collapse">
          <thead className="bg-pink-300 text-pink-900 uppercase text-sm">
            <tr>
              <th className="p-3 w-12">ID</th>
              <th className="p-3">Title</th>
              <th className="p-3 text-center">Completed</th>
            </tr>
          </thead>
          <tbody>
            {filteredTodos.slice(0, itemsPerPage).map((todo) => (
              <tr
                key={todo.id}
                className="odd:bg-white even:bg-pink-50 border-b border-pink-200"
              >
                <td className="p-3 text-pink-700 font-semibold">{todo.id}</td>
                <td className="p-3 text-gray-800">{todo.title}</td>
                <td className="p-3 text-center">
                  {todo.completed ? (
                    <span className="bg-pink-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      done 🌸
                    </span>
                  ) : (
                    <span className="bg-pink-300 text-pink-900 px-3 py-1 rounded-full text-sm font-semibold">
                      Waiting 💖
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


