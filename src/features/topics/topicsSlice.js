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
        quizIds: []
      };
      state.topics = { ...state.topics, [newTopic.id]: newTopic };
    },
    addQuizFromTopic: (state, action) => {
      state.topics[action.payload.topicId].quizIds.push(action.payload.id);
    }
  }
};

const topicsSlice = createSlice(topics);
//Required for the creation of the store:
export const topicReducer = topicsSlice.reducer;
//Required for create actions
export const { addTopic, addQuizFromTopic } = topicsSlice.actions;
//Required for access the State
export const selectTopics = (state) => state.topics.topics;
