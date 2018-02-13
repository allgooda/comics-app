export function comicsReducers(state={
  comics: []
  }, action) {

  switch(action.type) {
    case "GET_COMICS":
      return 'GET COMICS REDUCER';
      break;
  }

  return state;
}