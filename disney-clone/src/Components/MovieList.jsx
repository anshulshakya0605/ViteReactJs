import React, { useEffect, useRef, useState } from 'react'
import MovieCard from './MovieCard'
import GlobalApi from '../Services/GlobalApi'
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";
import HrMovieCard from './HrMovieCard';

function MovieList({ genreId, index_ }) {
    const [movieList, setMovieList] = useState([])
    const elementRef = useRef(null)

    useEffect(() => {
        getMovieByGenreId()
    }, [])

    const getMovieByGenreId = () => {
        GlobalApi.getMovieByGenreId(genreId).then(resp => {
            // console.log(resp.data.results);
            setMovieList(resp.data.results)
        })
    }

    const sliderRight =(element) => {
        element.scrollLeft+=500
    }
    const sliderLeft=(element) => {
        element.scrollLeft-=500
    }

    return (
        <div className='relative'>
            <IoChevronBackOutline className={`text-[50px] cursor-pointer p-2 z-10 hidden md:block absolute top-0 ${index_%3===0?'mt-[60px]' :'mt-[150px]'}`} onClick={() => sliderLeft(elementRef.current)} />
           
            <div className='flex gap-3 md:gap-8 overflow-x-auto p-3 px-4 py-4 scrollbar-none scroll-smooth' ref={elementRef}>
                {movieList.map((item) => (
                    <>
                    {index_%3===0 ? <HrMovieCard movie={item} /> : <MovieCard movie={item} />}
                    </>
                ))}
            </div>
            <IoChevronForwardOutline className={`text-[50px] cursor-pointer p-2 z-10 hidden md:block absolute top-0 right-0 ${index_%3===0?'mt-[60px]' :'mt-[150px]'}`} onClick={() => sliderRight(elementRef.current)} />
        </div>
    )
}

export default MovieList
