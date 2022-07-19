import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import About from "./components/About";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Traing yolov5 2d detection model",
      time: "20/07/2022 19:30",
      reminder: true,
    },
    {
      id: 2,
      text: "Traing yolov5 2d detection model",
      time: "20/07/2022 19:30",
      reminder: true,
    },
    {
      id: 3,
      text: "Traing yolov5 2d detection model",
      time: "20/07/2022 19:30",
      reminder: true,
    },
    {
      id: 4,
      text: "Traing yolov5 2d detection model",
      time: "20/07/2022 19:30",
      reminder: true,
    },
  ]);

  // Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <BrowserRouter>
    <div className="container">
      <Header title="Hello Cuongnq" />
      <Routes>
        <Route path='/' element={
          <>
           <AddTask onAdd={addTask} />
            {Tasks.length > 0 ? (
              <Tasks
                tasks={tasks}
                onDelete={deleteTask}
                onToggle={toggleReminder}
              />
            ) : (
              "No tasks found"
            )}
            <Link to="/about">About page</Link>
          </>}>
        </Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
