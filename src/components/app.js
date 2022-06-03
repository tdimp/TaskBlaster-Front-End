import * as React from "react";
import ReactDom from 'react-dom';
import Button from '@mui/material/Button';
import NavBar from "./navbar";
import NewTaskForm from "./newtaskform";
import NewUserForm from './newuserform';

export default function App() {
  return (
    <div>
      <NewTaskForm></NewTaskForm>
      <NewUserForm></NewUserForm>
    </div>
      
  );
}
