import './App.css';
import Header from './MyComponent/Header';
import { Todos } from './MyComponent/Todos';
import { Footer } from './MyComponent/Footer';
// import { About } from './MyComponent/About';
import { useState, useEffect } from 'react';
import { AddTodo } from './MyComponent/AddTodo';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  let initTodo
  if (localStorage.getItem("todos") === null) {
    initTodo = []
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }
  const addTodo = (title, desc) => {
    let sno = (todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1)
    const mytodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, mytodo])
  }
  const [todos, setTodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <div>
      {/* <Router> */}
      <Header title="My Todo List" />
      {/* <Routes> */}
      {/* <Route path="/" element={ */}
      <div>
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} onDelete={onDelete} />
      </div>
      {/* }> */}
      {/* </Route> */}
      {/* <Route path="/about" element={<About />} /> */}
      {/* </Routes> */}
      <Footer />
      {/* </Router> */}
    </div>
  );
}

export default App;
