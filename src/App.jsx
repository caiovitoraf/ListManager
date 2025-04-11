import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import "./App.css";
import { useState } from "react";

function App () {
  const [tasks, setTasks] = useState([
    {
    id: 1,
    title: "Estudar programação",
    description: "Estudar programação para se tornar um desenvolvedor full stack",
    isCompleted: false
    },
    {
    id: 2,
    title: "Estudar inglês",
    description: "Estudar inglês para conseguir um emprego melhor",
    isCompleted: false
    },
    {
    id: 3,
    title: "Estudar matemática",
    description: "Estudar matemática para passar no vestibular",
    isCompleted: false
  },
]);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text -3xl text-slate-100 font-bold-center">
          Gerenciador de Tarefas</h1>
        <Tasks tasks={tasks}/>
      </div>
    </div>
  );
}

export default App;