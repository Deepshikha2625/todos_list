import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todoState, setTodoState] = useState([]);
  console.log(">>>>>>", todoState)
  const [todo, setTodo] = useState("")

  const addTodos = () => {
    setTodoState([...todoState, {
      text: todo,
      completed: false
    }]);
    setTodo("")
  }

  const removeTodo = (index) => {
    setTodoState(todoState?.filter((_, i) => i !== index))
  }

  const completeMark = (index) => {
    setTodoState(todoState?.map((data, i) => {
      return (
        i == index ? {
          ...data, completed: !data?.completed
        } : data
      )
    }))
  }

  return (
    <>
      <h1>Todos List</h1>
      <div>
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button type="button" onClick={() => addTodos()}>Add</button>
      </div>
      <ul>
        {todoState?.length !== 0 ? todoState?.map((data, index) => {
          return (
            <li>
              <div style={{ textDecoration: data?.completed == true ? "line-through" : "none", "margin": "8px 5px" }}>{data?.text}
                <button onClick={() => removeTodo(index)}>x</button>

                <button onClick={() => completeMark(index)}>{data?.completed == true ? "Completed" : "Complete"}</button>
              </div>


            </li>


          )
        }) : <p>No Data Found</p>}
      </ul>
    </>
  )
}

export default App
