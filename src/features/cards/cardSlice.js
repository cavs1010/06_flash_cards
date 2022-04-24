import { createSlice } from "@reduxjs/toolkit";

const cards = {
  name: "cards",
  initialState: {
    cards: {}
  },
  reducers: {
    addCard: (state, action) => {
      const newCard = {
        id: action.payload.id,
        front: action.payload.front,
        back: action.payload.back
      };
      state.cards = { ...state.cards, [newCard.id]: newCard };
    }
  }
};

const cardsSlice = createSlice(cards);
//For the creation in the store:
export const cardsReducer = cardsSlice.reducer;
// For an action creator
export const { addCard } = cardsSlice.actions;
// For accessing the state:
export const selectCards = (state) => state.cards.cards;