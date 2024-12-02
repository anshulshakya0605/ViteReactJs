import React from 'react'
import GenresList from '../Constant/GenresList'
import MovieList from './MovieList'
function GenreMovieList() {
  return (
    <div className='relative'>
      
      {GenresList.genre.map((item, index) => index <= 4 &&(
        <div className='p-5 px-8 md:px-16'>
            <h1 className='text-[20px] font-bold'> {item.name} </h1>
            <MovieList genreId={item.id} index_={index} />
        </div>
      ))}

    </div>
  )
}

export default GenreMovieList;
