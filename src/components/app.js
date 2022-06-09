import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewTaskForm from "./newtaskform";
import NewUserForm from './newuserform';
import TaskPage from './taskpage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<NewTaskForm />} />
        <Route exact path="/newuserform" element={<NewUserForm />} />
        <Route exact path="/tasks" element={<TaskPage />} />
      </Routes>
    </BrowserRouter>
      
  );
}
