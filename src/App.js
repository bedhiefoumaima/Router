import React, { useState } from "react";

// CSS
import "./App.css";

// data
import { moviesData } from "./constants/data";

// components
import Footer from "./Component/Footer/Footer";
import MovieList from "./Component/MovieList/MovieList";
import Navbar from "./Component/Navbar/Navbar";
import AddMovie from "./Component/AddMovie/AddMovie";
import { Route, Switch } from "react-router-dom";
import Description from "./Component/Description/Description";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState(0);

  const handleMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <div>
      <Navbar
        setSearchTitle={setSearchTitle}
        setSearchRating={setSearchRating}
        searchRating={searchRating}
      />
      <Switch>
        <Route exact path="/" >
            <AddMovie handleMovie={handleMovie} />
        <MovieList
          movies={movies}
          searchTitle={searchTitle}
          searchRating={searchRating}
        />
        </Route>
        <Route path="/description" component={Description}/>
      </Switch>

      <div
        style={{ display: "flex", alignContent: "flex-start", marginTop: "5%" }}
      >
        <AddMovie handleMovie={handleMovie} />
        <MovieList
          movies={movies} 
          searchTitle={searchTitle}
          searchRating={searchRating}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
