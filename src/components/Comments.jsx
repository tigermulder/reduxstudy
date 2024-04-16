import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchComment } from '../redux'

const Comments = ({ fetchComment, loading, comments }) => {

  useEffect(()=>{
    fetchComment()
  }, [fetchComment])


  const commentsItems = loading ? (<div>is loading...</div>) : (
    comments ? comments.map(ele => (
      <li key={ele.id}>
        <h3>{ele.name}</h3>
        <p>{ele.email}</p>
        <p>{ele.body}</p>
      </li>
    )) : <div>No comments available.</div>
  );
   
  return (
    <ul>
      {commentsItems}
    </ul>
  )
}

const mapStateToProps = ({comments}) =>{
  return {
    comments : comments.items,
    loading : comments.loading
  }
}
const mapDispatchToProps = {
  fetchComment : fetchComment
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
