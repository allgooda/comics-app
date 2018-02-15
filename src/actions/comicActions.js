import axios from 'axios';

 function buildUrlsArray(current) {
   let arr = [];

   while(arr.length < 10){
     var random = Math.floor(Math.random()*1955) + 1;
     if(current) {
      if(arr.indexOf('http://localhost:3001/comics/' + random) > -1 || current.indexOf(random) > -1) continue;
      arr[arr.length] = 'http://localhost:3001/comics/' + random;
      console.log(arr);
     } else {
       if(arr.indexOf('http://localhost:3001/comics/' + random) > -1) continue;
       arr[arr.length] = 'http://localhost:3001/comics/' + random;
     }
   }
   // for(var i=1; i < 11; i++) {
   //    var random = Math.floor(Math.random() * 1955)
   //    if (current) {
   //      console.log(current.indexOf(random));
   //      if(current.indexOf(random) !== -1) {
   //         while(random === current[current.indexOf(random)]) {
   //           random = Math.floor(Math.random() * 1955);
   //         }
   //      }
   //    }
   //    urls.push('http://localhost:3001/comics/' + random)
   // }
   return arr;
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
        dispatch({type:"GET_COMICS", payload: response})
      })
      .catch(function(err) {
        dispatch({type:"GET_BOOKS_REJECTED", payload:err})
      })
  }
}

export function removeComic(num) {
  return {
    type: "REMOVE_COMIC",
    payload: num,
  }
}

export function generateComics(currentComics) {
  return function(dispatch) {
  var urls = buildUrlsArray(currentComics);
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
      dispatch({type:"GET_MORE_COMICS", payload: response})
    })
    .catch(function(err) {
      dispatch({type:"GET_MORE_REJECTED", payload:err})
    })
  }
}





