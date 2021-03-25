import React from 'react'
import './App.css';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import UpdateIcon from '@material-ui/icons/Update';

function InputForm(props) {
    const handleInput=(e)=>{
       const input=e.target.value
        props.setTodo(input)
    }
  return (
      <div className="input_related">
        <input value={props.todo} type="text" placeholder="Add Things To Do..." onChange={handleInput}/> 
        {props.isEdit ? 
        <UpdateIcon onClick={()=>props.updateItems(props.editIndex)} style={{cursor:"pointer",color:"green",fontSize:"45px"}}/> 
        : 
        <AddCircleOutlineOutlinedIcon onClick={props.addItems} style={{cursor:"pointer",color:"green",fontSize:"45px"}}/>}
      </div>  
  );
}

export default InputForm;
