import React,{useEffect,useState} from 'react';
import axios from '../../axios';
import {API_KEY,imagUrl} from '../../constants/Constants'
import './Banner.css';

const Banner = () => {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0]);
      setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length -1)])
    })
   

  }, []);
   
  return (
    <div style={{backgroundImage:`url(${movie? imagUrl+ movie.backdrop_path:""})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{ movie?movie.title:" "}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{ movie?movie.overview:" "} </h1>
        </div>
        <div className='fade_bottom'></div>
      
    </div>
  );
}

export default Banner;
