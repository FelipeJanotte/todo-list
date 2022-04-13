import { GetServerSideProps } from "next";
import { useState } from "react";
import { Nav } from "../components/Nav";
import { TodoCreation } from "../components/TodoCreation";
import { getAllTodos, Todo } from "../lib/db";

export const getServerSideProps: GetServerSideProps = async () => {
  const todos = await getAllTodos();
  return {
    props: {
      todos,
    },
  };
};

interface PostProps {
  todos: Todo[];
}

const Home = ({ todos }: PostProps) => {
  const [description, setDescription] = useState("");
  const [visibilityModal, setVisibilityModal] = useState(false);

  const deleteTodo = async (id: number) => {
    await fetch("/api/todo/", {
      method: "DELETE",
      body: JSON.stringify(id),
    });
  };

  const updateTodo = async (id: number) => {
    await fetch("/api/todo/", {
      method: "PUT",
      body: JSON.stringify({ id, description }),
    });
  };

  return (
    <div className="h-screen bg-gray-500">
      <Nav />
      <div>
        <TodoCreation></TodoCreation>

        <div>
          {todos.map((item, index) => (
            <div key={item.id} className="flex justify-center">
              <div className=" relative justify-center mt-6">
                <div className="absolute flex top-0 right-0 p-3 space-x-1">
                  <span
                    title="Edit"
                    className="update cursor-pointer p-1 rounded-full ease-in-out duration-200 hover:text-green-500"
                    onClick={() => {
                      setVisibilityModal(true);
                      setDescription("");
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </span>
                  <span
                    title="Delete"
                    className="delete cursor-pointer p-1 rounded-full ease-in-out duration-200 hover:text-green-500"
                    onClick={() => {
                      deleteTodo(item.id);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </span>
                </div>
                <span className="absolute -left-3 -top-3 bg-green-500 flex justify-center items-center rounded-full w-8 h-8 text-gray-50 font-bold">
                  {index + 1}
                </span>
                <p className="bg-white px-12 py-8 rounded-lg w-80">
                  {item.description}
                </p>
              </div>
              <div
                style={{ display: visibilityModal ? "block" : "none" }}
                className="modal h-screen w-screen absolute items-center justify-center top-0 bg-black bg-opacity-60 p-16"
              >
                <div className="bg-gray-50 opacity-100 max-w-xl mx-auto p-4 sm:p-6 lg:p-8 rounded-2xl">
                  <h2 className="text-xl font-medium tracking-tight text-gray-900 sm:text-2xl">
                    <span className="block m-2">Old todo:</span>
                    <span className="block text-green-600">{item.description}</span>
                    <span className="block m-2">New todo:</span>
                    <input
                      className="border-2 rounded-lg"
                      type="text"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </h2>
                  <div className="mt-8 flex ">
                    <div className="inline-flex rounded-md shadow">
                      <button
                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white duration-150 bg-green-600 hover:bg-green-700"
                        onClick={() => {
                          updateTodo(item.id);
                          setVisibilityModal(false);
                        }}
                      >
                        Save
                      </button>
                    </div>
                    <div className="ml-3 inline-flex rounded-md shadow">
                      <button
                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50"
                        onClick={(e) => {
                          setVisibilityModal(false);
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
