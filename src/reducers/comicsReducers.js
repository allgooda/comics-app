export function comicsReducers(state={
  comics: []
  }, action) {

  switch(action.type) {
    case "GET_COMICS":
      return {...state, comics: [...action.payload]};
      break;
    case "REMOVE_COMIC":
      const comicToDelete = [...state.comics]

      const numberToDelete = comicToDelete.findIndex(
        function(comic) {
          return comic.data.num == action.payload;
        }
      )
      return {comics: [...comicToDelete.slice(0, numberToDelete), ...comicToDelete.slice(numberToDelete + 1)]}
      break;
  }

  return state;
}
