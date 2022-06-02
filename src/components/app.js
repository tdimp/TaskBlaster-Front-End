import * as React from "react";
import ReactDom from 'react-dom';
import Button from '@mui/material/Button';
import NavBar from "./navbar";
import NewTaskForm from "./newtaskform";
import Login from './login'

export default function App() {
  return (
    <div>
      <NewTaskForm></NewTaskForm>
      <Login></Login>
    </div>
      
  );
}
