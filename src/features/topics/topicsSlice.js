import { createSlice, configureStore } from "@reduxjs/toolkit";

const topics = {
  name: "topics",
  // initialState: {
  //   n: "Camilo"
  // },
    initialState: {
      topics: {
        123: {
          id: "123",
          name: "example topic",
          icon: "icon url",
          quizIds: ["456"]
        }
      }
    },
  reducers: {
    addTopic: (state, action) => {
      const newTopic = {
        id: action.payload.id,
        name: action.payload.name,
        icon: action.payload.icon,
        quizIds: []
      };
      state.topics.topics[action.payload.id] = newTopic;
    }
  }
};

export const topicsSlice = createSlice(topics);
export const topicReducer = topicsSlice.reducer;
export const selectTopics = (state) => state.topics.topics;
