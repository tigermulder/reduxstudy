import { ACTION_TYPE } from "./types"

export const addSubscribers = () => {
  return {
    type : ACTION_TYPE.ADDsubs
  }
}
export const removeSubscribers = () => {
  return {
    type : ACTION_TYPE.RMsubs
  }
}