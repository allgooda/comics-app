import axios from 'axios';

 function buildUrlsArray() {
   var urls = [];
   for(var i=1; i < 11; i ++) {
      var random = Math.floor(Math.random() * 1954)
      urls.push('http://localhost:3001/comics/' + random)
   }
   return urls;
 }

export function getComics() {
  return function(dispatch) {
    var urls = buildUrlsArray();
    axios.all([
        axios.get(urls[0]),
        axios.get(urls[1]),
        axios.get(urls[2]),
        axios.get(urls[3]),
        axios.get(urls[4]),
        axios.get(urls[5]),
        axios.get(urls[6]),
        axios.get(urls[7]),
        axios.get(urls[8]),
        axios.get(urls[9]),
      ])
      .then(function(response) {
        console.log(response);
        dispatch({type:"GET_COMICS", payload: response})
      })
      .catch(function(err) {
        dispatch({type:"GET_BOOKS_REJECTED", payload:err})
      })
  }
}
