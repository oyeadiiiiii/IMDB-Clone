import React, { useEffect, useState } from "react";

import genreids from '../utility/genre'

function WatchList({ watchlist, setWatchList, handleRemoveFromWatchList }) {
  const [search, setSearch] = useState("");
  const [genreList, setgenreList]= useState(['All Genres'])
  const [currentGenre, setCurrentGenre] = useState('All Genres')


  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let sortIncreasing= ()=>{
    let sortedIncreasing = watchlist.sort((movieA, movieB)=>{
      return movieA.vote_average-movieB.vote_average
    })
    setWatchList([...sortedIncreasing])

  }
  

  let sortDecreasing= ()=>{
    let sortedDecreasing= watchlist.sort((movieA, movieB)=>{
      return movieB.vote_average-movieA.vote_average
    })
    setWatchList([...sortedDecreasing])

  }

    let sortIncreasingPop= ()=>{
    let sortedIncreasingPop = watchlist.sort((movieA, movieB)=>{
      return movieA.popularity-movieB.popularity
    })
    setWatchList([...sortedIncreasingPop])

  }
  

  let sortDecreasingPop= ()=>{
    let sortedDecreasingPop = watchlist.sort((movieA, movieB)=>{
      return movieB.popularity-movieA.popularity
    })
    setWatchList([...sortedDecreasingPop])

  }

  useEffect(()=>{
    let temp=watchlist.map((movieObj)=>{
      return genreids[movieObj.genre_ids[0]]
    })
    temp=new Set(temp)
    setgenreList(['All Genres', ...temp])
    console.log(temp)
  }, [watchlist])

  let handleFilter =(genre)=>{
    setCurrentGenre(genre)
  }




  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        
        {genreList.map((genre) => {
          return (
            <div onClick={()=>handleFilter(genre)}  className={currentGenre==genre?"flex justify-center h-[3rem] w-[9rem] rounded-xl text-white font-bold items-center  bg-blue-400 m-4": "flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl text-white font-bold m-4"}>
              {genre}
            </div>
          );
        })}
        
        
      
      </div>
      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search Movies"
          className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4"
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border">
  <tr>
    <th>Name</th>

    <th>
      <div className="flex justify-center items-center">
        <div onClick={sortIncreasing} className="p-2 cursor-pointer">
          <i className="fa-solid fa-arrow-up"></i>
        </div>
        <div className="p-2">Ratings</div>
        <div onClick={sortDecreasing} className="p-2 cursor-pointer">
          <i className="fa-solid fa-arrow-down"></i>
        </div>
      </div>
    </th>

    <th>
      <div className="flex justify-center items-center">
        <div onClick={sortIncreasingPop} className="p-2 cursor-pointer">
          <i className="fa-solid fa-arrow-up"></i>
        </div>
        <div className="p-2">Popularity</div>
        <div onClick={sortDecreasingPop} className="p-2 cursor-pointer">
          <i className="fa-solid fa-arrow-down"></i>
        </div>
      </div>
    </th>

    <th>Genre</th>
  </tr>
</thead>


          <tbody>
            {watchlist.filter((movieObj)=>{
              if(currentGenre=='All Genres'){
                return true
              }else{
                return genreids[movieObj.genre_ids[0]]==currentGenre
              }
            })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border" key={movieObj.id}>
                    <td className="flex items-center px-6 py-4 ">
                      <img
                        className="h-[6rem] w-[10rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                      />
                      <div className="mx-10">{movieObj.original_title}</div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreids[movieObj.genre_ids[0]]} </td>
                    <td onClick={()=>handleRemoveFromWatchList(movieObj)} className="text-red-800">Delete</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
