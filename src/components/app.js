import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./navbar";
import Home from "./home";
import NewTaskForm from "./newtaskform";
import NewUserForm from './newuserform';
import TaskPage from './taskpage';
import EditTaskForm from "./edittaskform";
import UserPage from "./userpage";

export default function App() {

  const url = "http://localhost:9292"
  // fetch Users and Tasks here, pass as props to TaskPage, NewUserForm, NewTaskForm, EditTaskForm
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState("");
  
  useEffect(() => {
    fetch(`${url}/users`)
      .then((r) => r.json())
      .then((data) => setUsers([...data]))
  }, []);

  useEffect(() => {
    fetch(`${url}/tasks`)
      .then((r) => r.json())
      .then((data) => setTasks([...data]))
  }, []);

  // advanced hooks - Phase 2 - React Context
  
  const handleTaskFilter = (e) => {
    e.preventDefault();
    setUser(e.target.value === "All" ? "" : e.target.value)
  }

  let displayedTasks = user.length
    ? tasks.filter((task) => task.user_id == user)
    : tasks;

  function handleAddUser(newUser) {
    setUsers([...users, newUser]);
  }

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function handleEditTask(editedTask) {
    const newTasks = tasks.map((task) => {
      if (task.id === editedTask.id) {
        return editedTask
      } else {
        return task
      }
    });
    setTasks(newTasks);
  }

  function handleDeleteTask(id) {
    const newTasks = tasks.filter((task) => task.id != id)
    setTasks(newTasks);
  }

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/tasks/new" element={<NewTaskForm users={users} url={url} handleAddTask={handleAddTask} /> } />
          <Route exact path="/users/new" element={<NewUserForm users={users} url={url} handleAddUser={handleAddUser} />} />
          <Route exact path="/tasks" element={<TaskPage tasks={displayedTasks} users={users} url={url} handleEditTask={handleEditTask} handleFilter={handleTaskFilter} />}  />
          <Route path="/tasks/:id/edit" element={<EditTaskForm tasks={tasks} users={users} url={url} handleEditTask={handleEditTask} handleDeleteTask={handleDeleteTask} />} />
          <Route path="/users" element={<UserPage users={users} tasks={tasks} url={url} handleEditTask={handleEditTask} ></UserPage>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
