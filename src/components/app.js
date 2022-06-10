import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./navbar";
import Home from "./home";
import NewTaskForm from "./newtaskform";
import NewUserForm from './newuserform';
import TaskPage from './taskpage';
import EditTaskForm from "./edittaskform";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/newtaskform" element={<NewTaskForm />} />
          <Route exact path="/newuserform" element={<NewUserForm />} />
          <Route exact path="/tasks" element={<TaskPage />} />
          <Route exact path="edittask" element={<EditTaskForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
