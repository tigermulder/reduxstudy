import { ACTION_TYPE } from "./types"
// import { addSubscribers, removeSubscribers } from "./actions"

const initialState = {
  count : 370,
}
const subscribeReducer = (state=initialState, action) => {
  switch(action.type) {
    case ACTION_TYPE.ADDsubs : 
      return {
        ...state,
        count : state.count + 1
      }
    case ACTION_TYPE.RMsubs : 
      return {
        ...state,
        count : state.count - 1
      }
    default : return state
  }
}
export default subscribeReducer;
