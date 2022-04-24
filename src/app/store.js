import { configureStore } from "@reduxjs/toolkit";
import { topicReducer } from "../features/topics/topicsSlice";
import { quizzesReducer } from "../features/quizzes/quizzesSlice";

const store = configureStore({
  reducer: {
    topics: topicReducer,
    quizzes: quizzesReducer,
  },
});

export default store;
