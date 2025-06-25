import React from "react";

function MovieCard({
  poster_path,
  name,
  handleAddtoWatchList,
  movieObj,
  handleRemoveFromWatchList,
  watchlist,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <div
      className="h-[40vh] w-[250px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div onClick={() => handleRemoveFromWatchList(movieObj)} className="m-4 flex  justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60">&#10060; </div>
      ) : (
        <div
          onClick={() => handleAddtoWatchList(movieObj)}
          className="m-4 flex  justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
        >
          &#129505;
        </div>
      )}

      <div className="text-white font-bold text-center bg-gray-900/60 text-xl w-full ">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
