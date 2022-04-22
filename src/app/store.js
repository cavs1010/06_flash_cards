import { configureStore } from "@reduxjs/toolkit";
import { topicReducer } from "../features/topics/topicsSlice";

const store =  configureStore({
  reducer: {
    topics: topicReducer,
  },
});

export default store;