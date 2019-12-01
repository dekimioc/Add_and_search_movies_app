const addButton = document.getElementById("add-movie-btn");
const searchButton = document.getElementById("search-btn");
const movieList = [];

const renderMovie = (filter = "") => {
    const ListOfMovies = document.getElementById("movie-list");
    if(movieList.length === 0) {
        ListOfMovies.classList.remove("visible");
    } else {
        ListOfMovies.classList.add("visible");
    }
    ListOfMovies.innerHTML = '';
    const filteredMovies = !filter ? movieList : movieList.filter(movie => movie.info.title.includes(filter));

    filteredMovies.forEach(movie => {
        let li = document.createElement("li");
       text = `Title: ${movie.info.title}`;
       for (const key in movie.info) {
           if(key !== "title") {
           text += ` - ${key}: ${movie.info[key]}`
       }
       li.textContent = text;
    }
    ListOfMovies.appendChild(li);
   })
   
   
}

const searchMovie = () => {
    const filterTitle = document.getElementById("filter-title").value;
    renderMovie(filterTitle);
}


const addMovie = () => {
    const title = document.getElementById("title").value;
    const extraName = document.getElementById("extra-name").value;
    const extraValue = document.getElementById("extra-value").value;

    if(title.trim() === '' || extraName.trim() === '' || extraValue.trim() === '') {
        return;
    }

    const newMovie = {
        info: {
            title: title,
            [extraName]: extraValue
        },
        id: Math.random().toString()
    }
    movieList.push(newMovie);
    console.log(movieList);
    renderMovie();
}

addButton.addEventListener("click", addMovie);
searchButton.addEventListener("click",searchMovie);