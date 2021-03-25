import React from 'react'
import './App.css';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
function TodoList(props) {
  return (
    <ul className="list">
       {props.todoList.map((todo,index)=>
        <li key={index} id={index} className="list_style">
           <p>{todo}</p>
            <div>
                <EditOutlinedIcon onClick={(e)=>props.editItems(index,e)} style={{cursor:"pointer",color:"blue",fontSize:"30px",marginRight:"5px"}}/>
                <DeleteOutlineOutlinedIcon onClick={props.deleteItems} style={{cursor:"pointer",color:"red",fontSize:"30px"}}/>
            </div>
        </li>
       ) 
       }
    </ul>
  );
}

export default TodoList;