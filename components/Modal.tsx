import { useState } from "react";

interface ContentProps {
  item:{
    description: string
    id: number
  }
  visibility: boolean
}

export const Modal = ({item, visibility}: ContentProps) => {
  const [description, setDescription] = useState("")

  const updateTodo = async (id: number) => {
    await fetch("/api/todo/", {
      method: "PUT",
      body: JSON.stringify({ id, description }),
    });
  };

  

  return (
    <div style={{display: visibility?"block":"none"}}  className="h-screen w-screen absolute items-center justify-center top-0 bg-black bg-opacity-60 p-16">
      <div className="bg-gray-50 opacity-100 max-w-xl mx-auto p-4 sm:p-6 lg:p-8 rounded-2xl">
        <h2 className="text-xl font-medium tracking-tight text-gray-900 sm:text-2xl">
          <span className="block m-2">Old todo:</span>
          <span className="block text-green-600">
            {item.description}
          </span>
          <span className="block m-2">New todo:</span>
          <input className="border-2 rounded-lg" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </h2>
        <div className="mt-8 flex ">
          <div className="inline-flex rounded-md shadow">
            <button
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white duration-150 bg-green-600 hover:bg-green-700"

              onClick={() => {
                updateTodo(item.id);
              }}
            >
              Save
            </button>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <button
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50"
              onClick={(e) => {
                console.log(visibility)
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
