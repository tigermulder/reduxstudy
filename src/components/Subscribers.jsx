import React from 'react'
import { connect } from 'react-redux'
import { addSubscribers, removeSubscribers } from '../redux'

const Subscribers = ({count, addSubscribers, removeSubscribers}) => {

  return (
    <div className='items'>
      <h2>구독자 수 : {count}</h2>
      <button onClick={()=> addSubscribers()}>구독하기</button>
      <button onClick={()=> removeSubscribers()}>구독해제</button>
    </div>
  )
}
const mapStateToProps = ({subs}) => {
  return {
    count : subs.count
  }
}

const mapDispatchToProps = {
  addSubscribers : addSubscribers,
  removeSubscribers : removeSubscribers
}

export default connect(mapStateToProps, mapDispatchToProps)(Subscribers)
