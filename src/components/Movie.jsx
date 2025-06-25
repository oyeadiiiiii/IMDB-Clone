import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pageination from "./Pageination";

function Movie({ handleAddtoWatchList, handleRemoveFromWatchList, watchlist }) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const handlePrev = () => {
    if (page == 1) {
      setPage(1);
    } else {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=b8c42c83cbd5c9973ee0e5cbbde2d514&language=en-US&page=${page}`
      )
      .then(function (res) {
        setMovies(res.data.results);
      });
  }, [page]);

  return (
    <div className="p-5">
      <div className="text-2xl font-bold text-center m-5">Trending Movies</div>

      <div className="gap-6 flex flex-row flex-wrap justify-around">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              movieObj={movieObj}
              key={movieObj.id}
              poster_path={movieObj.poster_path}
              name={movieObj.original_title}
              handleAddtoWatchList={handleAddtoWatchList}
              handleRemoveFromWatchList={handleRemoveFromWatchList}
              watchlist={watchlist}
            />
          );
        })}
      </div>

      <Pageination
        handlePrev={handlePrev}
        handleNext={handleNext}
        page={page}
      />
    </div>
  );
}

export default Movie;
