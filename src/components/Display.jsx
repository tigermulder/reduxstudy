import React from 'react'
import { connect } from 'react-redux'

const Display = ({count}) => {
  return (
    <div className='items'>
      <p>구독자 수 : {count}</p>
    </div>
  )
}

const mapStateToProps = ({subs}) => {
  return {
    count : subs.count
  }
}

export default connect(mapStateToProps)(Display)
