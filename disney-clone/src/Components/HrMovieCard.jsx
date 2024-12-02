import React from 'react'
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
function HrMovieCard({movie}) {
  return (
    <section className='hover:scale-110 transition-all duration-300 ease-in'>
      <img className='w-[110px] md:w-[260px] rounded-lg hover:border-[3px] border-gray-400 cursor-pointer shadow-lg shadow-gray-950' src={IMAGE_BASE_URL+movie.backdrop_path} alt="" />
      <h2 className=' w-[110px] md:w-[260px] mt-2 text-center'> {movie.title} </h2>
    </section>
  )
}

export default HrMovieCard;
