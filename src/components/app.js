import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./navbar";
import Home from "./home";
import NewTaskForm from "./newtaskform";
import NewUserForm from './newuserform';
import TaskPage from './taskpage';
import EditTaskForm from "./edittaskform";
import UserPage from "./userpage";
import UserTasks from "./usertasks";

export default function App() {

  const url = "http://localhost:9292"
  // fetch Users and Tasks here, pass as props to TaskPage, NewUserForm, NewTaskForm, EditTaskForm
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(`${url}/users`)
      .then((r) => r.json())
      .then((data) => setUsers(data))
  }, []);

  useEffect(() => {
    fetch(`${url}/tasks`)
      .then((r) => r.json())
      .then((data) => setTasks(data))
  }, []);

  // advanced hooks - Phase 2 - React Context

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/tasks/new" element={<NewTaskForm users={users} url={url} /> } />
          <Route exact path="/users/new" element={<NewUserForm users={users} url={url} />} />
          <Route exact path="/tasks" element={<TaskPage tasks={tasks} users={users} url={url} />}  />
          <Route path="/tasks/:id/edit" element={<EditTaskForm tasks={tasks} users={users} url={url} />} />
          <Route path="/users" element={<UserPage users={users} tasks={tasks}></UserPage>} />
          <Route path="/users/:id/tasks" element={<UserTasks users={users} tasks={tasks} url={url}></UserTasks>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
