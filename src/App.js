import React, { useCallback, useState } from "react";
import "./App.css";
import "h8k-components";

import { Movieform, Movieslist, Search } from "./components";

const title = "Favorite Movie Directory";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");

  const addMovie = useCallback((name, ratings, duration) => {
    const movie = { name, ratings, duration };

    setMovies((previous) => [...previous, movie]);
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().startsWith(searchText.toLowerCase())
  );

  return (
    <div>
      <h8k-navbar header={title} />
      <div className="layout-row justify-content-center mt-100">
        <div className="w-30 mr-75">
          <Movieform addMovie={addMovie} />
        </div>
        <div className="layout-column w-30">
          <Search setSearchText={setSearchText} />
          {filteredMovies.length ? (
            <Movieslist movies={filteredMovies} />
          ) : (
            <div data-testid="noResult">
              <h3 className="text-center">No Results Found</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
