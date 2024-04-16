import { ACTION_TYPE } from "./types";

export const addView = (number) => {
  return {
    type : ACTION_TYPE.ADDview,
    payload : parseInt(number) 
  }
}