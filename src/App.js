import "./App.css";
import Header from "./MyComponents/Header"; // this is default import
import { Footer } from "./MyComponents/Footer"; // this is named import
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
    console.log("empty");
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("you clicked on delete of ", todo);
    // deleting this way wont work in react
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );

    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addTodo = (title, desc) => {
    console.log("clicked on addtodo", title, desc);
    let sno = 0;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };
  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <Router>
        <Header title="MyTodosList" searchBar={false} />
        <Switch>
          <Route
           exact path="/"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              );
            }}
          ></Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
