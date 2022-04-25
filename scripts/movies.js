// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let timerId;
let amnt = localStorage.getItem("wallet") || 0;
let item = JSON.parse(localStorage.getItem("star")) || [];
 

const seachMovies = async () => {
    try {
        let input = document.querySelector("#search").value;
        let res = await fetch(
            `https://www.omdbapi.com/?apikey=f4a8223f&s=${input}`
            );
            let data1 = await res.json();
            console.log(data1);
           
            let array_obj = data1.Search;
           //return array_obj;
            console.log(array_obj);
            display(array_obj)
            showwallet();
        } catch(err) {
                console.log("err:",err);
            }

    };

    const appendMovies = (array_obj) => {
        seachMovies.innerHTML = null;
        if(array_obj == undefined) {
            return false;
        }
    }
     seachMovies();
    function display(array_obj) {
     document.querySelector("movies").innerHTML = null;

     array_obj.map(function(el) {
         let maindiv = document.createElement("div");
         let imagediv = document.createElement("div");
         let image = document.createElement("img");
        image.src = el.image;
        let title = document.createElement("div");
        title.innerText = el.title;
        let book = document.createElement("button")
        book.setAttribute("class", "book_now")
        book.innerHTML = "Book Now";
        // getitem(el);
     });
     imagediv.append(image);
     maindiv.append(imagediv, title, book);
     document.querySelector("movies").append(maindiv);
    

   
}

function showwallet() {
    amnt = Number(amnt);
    console.log(amnt);
    localStorage.setItem("wallet",amnt);
    document.querySelector("wallet").innerHTML = amnt;
}

const main = async () => {
    let movie = await seachMovies();
    if(movie == undefined) {
        return false;
    }
    console.log("movie",movie);
    appendMovies(movie);
}

const debounce = (func, delay) => {
    if(timerId) {
        clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      func();
    },delay);
};