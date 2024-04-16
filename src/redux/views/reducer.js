import { ACTION_TYPE } from "./types";

const initialState = {
  count : 0,
}
const viewsReducer = (state=initialState, action) => {
  switch(action.type) {
    case ACTION_TYPE.ADDview :
      return {
        ...state,
        count : state.count + action.payload
      }
    default : return state
  }
}

export default viewsReducer