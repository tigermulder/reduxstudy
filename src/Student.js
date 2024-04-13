import React from 'react'

const Student = ({name, dispatch, id, isHere, ACTION_TYPE}) => {
  let studentId = String(id).split('').slice(-3).join('')
  return (
    <div>
      <span style={{
        textDecoration : isHere ? "line-through" : "none",
        color : isHere ? "gray" : "black"
      }}>{studentId}</span>
      <span style={{
        textDecoration : isHere ? "line-through" : "none",
        color : isHere ? "gray" : "black"
      }}
      onClick={()=>{
        dispatch({
          type : ACTION_TYPE.mark,
          payload : {id}
        })
      }}
      >{name}</span>
      <button onClick={()=>{
        dispatch({
          type : ACTION_TYPE.delete,
          payload : {id}
        })
      }}>삭제</button>
    </div>
  )
}

export default Student
