export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //delete later
  //token: "BQBiBfb3ptK0vWz24kLWUrorbRkW_JlIgoZ_7JaT7RUrwn5ehonTeXbAxSpnB7gLml19AsHaOYwAPjEjaUqd9wRvvVPlbU_NuAy8lrPVQtpMkT0ykV4eXaGgNrRHXLV38Gaq49vZoZlCSCSN_rVqRc0NfRWoSjzD_i1lR7XUoh8opRpP"
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
      case "SET_PLAYLISTS":
        return{
          ...state,
          playlists: action.playlists
        }
    default:
      return state;
  }
};

export default reducer;
