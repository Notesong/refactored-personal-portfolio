export default (state, action) => {
  switch (action.type) {
    // login check and toggle reducer
    case "SET_IS_PROJECT":
      if (action.payload) {
        return {
          ...state,
          isProject: true
        };
      } else {
        return {
          ...state,
          isProject: false
        };
      }
    default:
      return state;
  }
};
