import React, { useEffect, useState } from 'react'
import './todoInput.css'
import TodoList from './TodoList';
import { db } from '../../firebase'
import firebase from 'firebase/compat/app'

function TodoInput() {

  const [todos, setTodos] = useState("");
  const [saved, setSaved] = useState([]);


  useEffect(() => {
      db.collection('Todo').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
        setSaved(snapshot.docs.map(doc =>({
          id: doc.id,
          data: doc.data(),
        })))
      })
  }, [])


  const handleSubmit = (e)=>{
    e.preventDefault();

    if(!todos){

    }else{
      db.collection('Todo').add({
        title: todos,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
    }
    
    setTodos('');

  }

  return (
    <div className="todoInput" >
        <form >
            <input required type="text" placeholder="What to do ?" value={todos} onChange={(e)=>setTodos(e.target.value)} />
            <button type="submit" onClick={handleSubmit} >ADD TODO</button>
        </form>
        
        <div className="todoListWrapper">
          <div className="todoListItem" >
            {saved.map(({id, data:{title}})=>(
                <TodoList className="todoList1" key={id} title={title} icon />
            ))}            
          </div>
            
        </div>
       

        
    </div>
  )
}

export default TodoInput