import { FETCH_TYPE } from "./types";

const fetchCommentSucces = (comments) => {
  return {
    type : FETCH_TYPE.SUCCESS,
    payload : comments
  }
}
const fetchCommentFail = (error) => {
  return {
    type : FETCH_TYPE.FAIL,
    payload : error
  }
}
const fetchCommentRequest = () => {
  return {
    type : FETCH_TYPE.REQUEST
  }
}

export const fetchComment = () => {
  return async (dispatch)=> {
    dispatch(fetchCommentRequest());
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/comments");
      const jsonData = await response.json();
      dispatch(fetchCommentSucces(jsonData))
    } catch(error) {
      dispatch(fetchCommentFail(error)); // 오류 처리
    }
  }
}