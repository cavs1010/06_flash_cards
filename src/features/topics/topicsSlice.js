import { createSlice } from "@reduxjs/toolkit";

const topics = {
  name: "topics",
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, action) => {
      const newTopic = {
        id: action.payload.id,
        name: action.payload.name,
        icon: action.payload.icon,
        quizIds: ["1", "3"]
      };
      console.log(state.topics);
      state.topics = { ...state.topics, [newTopic.id]: newTopic };
    }
  },
  new: {}
};

export const topicsSlice = createSlice(topics);
//Required for the creation of the store:
export const topicReducer = topicsSlice.reducer;
//Required for create actions
export const { addTopic } = topicsSlice.actions;
//Required for access the State
export const selectTopics = (state) => state.topics.topics;
