import React from 'react'
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";

function MovieCard({movie}) {
  return (
    <>
      <img className='w-[150px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-400 hover:scale-110 transition-all duration-300 ease-in cursor-pointer shadow-lg shadow-gray-950' src={IMAGE_BASE_URL+movie.poster_path} alt="" />
    </>
  )
}

export default MovieCard;
