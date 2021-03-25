import React,{useState} from 'react'
import './App.css';
import Header from "./Header"
import InputForm from "./InputForm"
import TodoList from "./TodoList"

function App() {
  const [todo,setTodo]=useState("")
  const [todoList,setTodoList]=useState([])
  const [isEdit,setIsEdit]=useState(false)
  const [editIndex,setEditIndex]=useState("")
const addItems=()=>{
  setTodoList((olditems)=>[...olditems,todo])
  setTodo("")
}

const deleteItems=(e)=>{
 e.target.parentElement.parentElement.remove()
}

const editItems=(index,e)=>{
  setIsEdit(true)
  alert(`Edit (${e.target.parentElement.parentElement.childNodes[0].innerText})  Item in the input field`)
  // setTodo(e.target.parentElement.parentElement.childNodes[0].innerText)
  setEditIndex(index)
 }

 const updateItems=(id)=>{
 const editItemIndex=todoList.findIndex((item,index)=>{
   return index===id
 })
 let editItems=[...todoList]
 editItems[editItemIndex]=todo
 setTodoList(editItems)
 setIsEdit(false)
 }
  return (
    <div>
      <Header/>
      <div className="todo_wrapper">
        <InputForm updateItems={updateItems} editIndex={editIndex} isEdit={isEdit} todo={todo} setTodo={setTodo} addItems={addItems}/>
       { todoList.length===0 ? <p style={{fontWeight:"700",textAlign:"center",marginTop:"10px"}}>Nothing to do</p>
       :
       < TodoList  editItems={editItems} deleteItems={deleteItems} todoList={todoList}/>
       }
       
      </div> 
    </div>
  );
}

export default App;
