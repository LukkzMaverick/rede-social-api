const INITIAL_STATE = {
  profile: {},
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_PROFILE":
      state.profile = action.profile;
      return state;
    case "REMOVE_EDUCATION":
      state.profile = {
        ...state.profile,
        education: state.profile.education.filter(item => item._id !== action.id)
      }
      return state;
    default:
      return state;
  }
};

export default reducer;
