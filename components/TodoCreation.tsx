import { useState } from "react";

export const TodoCreation = () => {
  const [description, setDescription] = useState("");
  
  const createTodo = async () => {
    await fetch("/api/todo", {
      method: "POST",
      body: JSON.stringify(description),
    });
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex justify-center mt-10">
      <div className="bg-gray-50 p-8 rounded-lg">
        <h1 className="text-center mb-4">Write Todo List</h1>
        <div className="flex space-x-2 p-2 bg-white rounded-md">
          <input
            value={description}
            onChange={(e) => setDescription(e.currentTarget.value)}
            type="text"
            placeholder="Write here..."
            className="w-full outline-none"
          />
          <button
            className="bg-green-500 px-2 py-1 rounded-md text-white font-semibold"
            onClick={() => {
              createTodo();
            }}
          >
            SEND
          </button>
        </div>
      </div>
    </form>
  );
};
