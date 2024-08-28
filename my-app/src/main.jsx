import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React, { useState } from "react";

/* import Input from './Events/Input'; */
/* import ComplexState from './ComplexState/ComplexState'; */

import Todo from "./todolist/Todo";
import TodoItem from "./todolist/TodoItem";

/* import Practice from './object/Practice.jsx'; */
/* import './sytling.css' */
/* import Form from '../form2/Form'
import Apps from '../form2/Apps'
import Ap from '../state/Ap' */
/* import Index from '../hooks' */
/* import UseStatePrac from './useState/UseStatePrac'; */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/*   <UseStatePrac /> */}
    {/* <Practice/> */}
    {/* <Input /> */}
    <Todo />
    <TodoItem />
  </StrictMode>
);
