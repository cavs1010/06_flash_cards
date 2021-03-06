import { createSlice } from "@reduxjs/toolkit";
import { addQuizFromTopic } from "../topics/topicsSlice";

const quizzes = {
  name: "quizzes",
  initialState: {
    quizzes: {
    }
  },
  reducers: {
    addQuiz: (state, action) => {
      const newQuiz = {
        id: action.payload.id,
        name: action.payload.name,
        topicId: action.payload.topicId,
        cardIds: action.payload.cardIds
      };
      state.quizzes = { ...state.quizzes, [newQuiz.id]: newQuiz };
    }
  }
};

const quizzesSlice = createSlice(quizzes);
//For the creation of the store
export const quizzesReducer = quizzesSlice.reducer;
//Required for create an action
export const { addQuiz } = quizzesSlice.actions;
// Thunk required for async operation
export const addQuizTopic = (payload) => {
  return async (dispatch) => {
    await dispatch(addQuiz(payload));
    dispatch(addQuizFromTopic(payload));
  };
};
//Required for acces the state
export const selectQuizzes = (state) => state.quizzes.quizzes;
