import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original"
const windowWidth = window.innerWidth
function Slider() {

    const [movieList, setMovieList] = useState([])
    const elementRef = useRef()
    useEffect(() => {
        getTrendingMovies()
    },[])

    const getTrendingMovies= () =>{
        GlobalApi.getTrendingVideos.then(resp => {
            // console.log(resp.data.results);
            setMovieList(resp.data.results)
        })
    }

    const sliderRight =(element) => {
        element.scrollLeft+=windowWidth-110
    }
    const sliderLeft =(element) => {
        element.scrollLeft-=windowWidth-110
    }

  return (
   <div>
    <HiChevronLeft className='hidden md:block text-[35px] absolute mt-[150px] mx-[60px] cursor-pointer' onClick={() => sliderLeft(elementRef.current)} />
    <HiChevronRight className='hidden md:block text-[35px] absolute mx-[60px] mt-[150px] cursor-pointer right-0' onClick={() => sliderRight(elementRef.current)} />
     
     
     <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth' ref={elementRef}>
      {movieList.map((item) => (
        <img src={IMAGE_BASE_URL+item.backdrop_path} className='min-w-full md:h-[310px] object-cover object-left-top mr-4 rounded-md hover:border-[4px] border-gray-300 transition-all duration-200 ease-in' alt="" />
      ))}
    </div>
   </div>
  )
}

export default Slider
