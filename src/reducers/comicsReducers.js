export function comicsReducers(state={
  comics: []
  }, action) {

  switch(action.type) {
    case "GET_COMICS":
      console.log(action.payload);
      return {...state, comics: [...action.payload]};
      break;
  }

  return state;
}
