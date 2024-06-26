import React, { createContext, useEffect, useState } from 'react'

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [todosArr, setTodosArr] = useState([]);

  useEffect(() => {
    let storedTodoArr = JSON.parse(localStorage.getItem("TodoList")) || [];
    if (storedTodoArr.length > 0) {
      setTodosArr(storedTodoArr)
    }
    // console.log(todosArr)
  }, [])

  useEffect(() => {
    localStorage.setItem("TodoList", JSON.stringify(todosArr))
  }, [todosArr])

  const addTodo = (todo) => {
    setTodosArr((prevs) => [...prevs, todo])
  }
  const updateTodo = (id, todo) => {
      const updatedTodo = todosArr.map((todoElem)=>todoElem.id==id?todo:todoElem);
      setTodosArr(updatedTodo);
  }

  const deleteTodo = (id) => {
    let updatedTodo = todosArr.filter((todo)=>todo.id!==id)
    setTodosArr(updatedTodo);
  }

  const toggleComplete = (id) => {
    const updatedTodo = todosArr.map((todo)=> {
      if(todo.id==id){
        return ({...todo,completed:!todo.completed})
      }
      else{
        return todo;
      }
    })
    setTodosArr(updatedTodo);
  }

  return (
    <TodoContext.Provider value={{ todosArr, setTodosArr, addTodo, deleteTodo, updateTodo, toggleComplete }}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider
