import React, { useReducer, useState } from 'react';
import './App.css';
import Student from './Student';

const ACTION_TYPE = {
  add : 'add-student',
  delete : 'delete-student',
  mark : 'mark-student'
}

const reducer = (state, action) => {
  switch(action.type){
    case ACTION_TYPE.add :
      const name = action.payload.name;
      const newStudent = {
        id : Date.now(),
        name,
        isHere : true
      }
      return {
        count : state.count + 1,
        students : [...state.students, newStudent]
      };
    case ACTION_TYPE.delete :
      return {
        count : state.count - 1,
        students : state.students.filter(students => students.id !== action.payload.id),
      };
    case ACTION_TYPE.mark :
      return {
        count : state.count,
        students : state.students.map((ele)=>{
          if(ele.id === action.payload.id){
            return {...ele, isHere: !ele.isHere}
          }
          return ele
        })
      }
    default :
      return state
  }
}

const initialState = {
  count : 0,
  students : [],
}

function App() {
  const [name,setName] = useState('');
  const [studentsInfo, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h1>츨석부</h1>
      <p>총 학생수 : {studentsInfo.count}</p>
      <input 
        type="text" 
        placeholder="이름을 입력해주세요"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />
      <button onClick={()=>{
        dispatch({type: ACTION_TYPE.add, payload: {
          id : Date.now(),
          name : name,
          isHere : true,
        }})
        setName('')
      }}>추가</button>
      {studentsInfo.students.map((ele)=>{
        return (
          <Student key={ele.id} name={ele.name} dispatch={dispatch} id={ele.id} isHere={ele.isHere} ACTION_TYPE={ACTION_TYPE}/>
        )
      })}
    </div>
  );
}


export default App;
