const topics = {
  name: "topics",
  initialState: { topics: {} },
  addTopic: (state, action) => {
    const newTopic = {id: action.payload.id, name: action.payload.name, icon: action.payload.icon};
	state.topics[action.payload.id] = newTopic;
  }
};
