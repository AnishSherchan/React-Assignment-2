import { PrimaryButton } from "../Buttons/Button";
import ComponentContainer from "../Container/ComponentContainer";
import { useState } from "react";
import PreviewContainer from "../Container/PreviewContainer";
import Input from "../InputField/Input";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const handleAddTodo = () => {
    const newTodo = {
      title: input,
      completed: false,
      id: Date.now().toString(36) + Math.random().toString(36).substr(2, 9),
    };
    setInput("");
    setTodoList([...todoList, newTodo]);
    alert(`New Task ${newTodo.title} added!`);
  };
  const handleDelete = (id) => {
    const updatedTodo = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodo);
  };
  const handleComplete = (id) => {
    const updatedTodo = todoList.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodoList(updatedTodo);
  };
  return (
    <ComponentContainer>
      <h1>Qn 2: Create a to-do list application.</h1>{" "}
      <p>
        - Build a to-do list where users can add, delete, and mark items as
        completed. Use state to manage the list of to-dos and props to pass
        individual to-do items to a child component for rendering.
      </p>
      <PreviewContainer>
        <h1 className=" text-center">Todo Application</h1>
        <div className="Input-field flex flex-row flex-wrap items-center justify-center gap-5">
          <div className="input min-w-[250px]">
            <Input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter your todo!"
              required={true}
            />
          </div>
          <PrimaryButton
            title="Add"
            onClick={() => handleAddTodo()}
            disabled={input.length === 0}
          />
        </div>
        <div className="TodoList flex flex-col gap-5 items-center justify-center  ">
          {todoList.length > 0 ? (
            todoList.map((todo) => {
              return (
                <div
                  key={todo.id}
                  className={`flex border  p-2 min-w-[35rem] rounded-md items-center justify-between gap-3 ${
                    todo.completed ? "border-green-600" : "border-gray-400"
                  }`}
                >
                  <p
                    className={`text-md font-semibold ${
                      todo.completed ? " line-through text-green-900" : ""
                    }`}
                  >
                    {todo.title}
                  </p>
                  <div className="actions flex flex-wrap gap-2">
                    <PrimaryButton
                      title="Delete"
                      onClick={() => handleDelete(todo.id)}
                    />
                    <PrimaryButton
                      title={todo.completed ? "Undo Complete" : "Complete"}
                      onClick={() => handleComplete(todo.id)}
                    />
                  </div>
                </div>
              );
            })
          ) : (
            <p className=" text-center text-lg font-semibold">
              You have not listed any Todo for today.
            </p>
          )}
        </div>
      </PreviewContainer>
    </ComponentContainer>
  );
};

export default Todo;
