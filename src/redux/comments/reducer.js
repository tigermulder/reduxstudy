import { FETCH_TYPE } from "./types";

const initailState = {
  items : [],
  loading : false,
  err : null
}
const commentsReducer = (state=initailState, action) =>{
  switch(action.type) {
    case FETCH_TYPE.REQUEST :
      return {
        ...state,
        loding : true
      }
    case FETCH_TYPE.SUCCESS : 
      return {
        ...state,
        items : action.payload,
        loading : false,
      }
    case FETCH_TYPE.FAIL : 
      return {
        ...state,
        err : action.payload,
        loading : false,
      }
    default: return state;
  }
}

export default commentsReducer