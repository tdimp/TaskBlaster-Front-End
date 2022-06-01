import * as React from "react";
import ReactDom from 'react-dom';
import Button from '@mui/material/Button';
import NavBar from "./navbar";
import NewTaskForm from "./newtaskform";

export default function App() {
  return (
    <div>
      <Button variant="contained">Hello, World</Button>
      <NewTaskForm></NewTaskForm>
    </div>
      
  );
}
