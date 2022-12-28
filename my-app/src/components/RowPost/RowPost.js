import React,{useEffect,useState} from 'react'
import './RowPost.css'
import {imagUrl,API_KEY} from '../../constants/Constants'
import axios from '../../axios';
import YouTube from 'react-youtube';



function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, seturlId] = useState("");
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data);
      setMovies(response.data.results)
    })

  }, [])
  const opts = {
    height: '400',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handelMovie = (id) => {
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
      console.log(response.data.results);
      if (response.data.results.length !== 0) {
        seturlId(response.data.results[0])
      }
    })
  }
  return (
    <div className='row'>
      <h2>{ props.title }</h2>
      <div className="posters">
           {movies.map((movie) => 
             <img onClick={()=>handelMovie(movie.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imagUrl+movie.backdrop_path}`} alt="" />
          )}
      </div>
      {urlId && <YouTube opts={opts} videoId={urlId.key} />}
    </div>
  )
}

export default RowPost
