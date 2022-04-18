import { configureStore } from "@reduxjs/toolkit";
import { topicReducer } from "../features/topics/topicsSlice";

export default configureStore({
  reducer: {
    topics: topicReducer
  },
});
