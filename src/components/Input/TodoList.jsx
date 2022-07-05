import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import './todoList.css'


function TodoList({id, title, icon}) {

  
  return (
    <div className="todoList" >
        <h4 className="title">{title}</h4>
            <div className="icons">
                {icon && <DeleteIcon className="icon" />}
                {icon ?  <CheckIcon className="icon1"/> : ""}
            </div>
    </div>
  )
}

export default TodoList