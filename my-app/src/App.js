
import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import {action,originals,ComedyMovies,HorrorMovies,RomanceMovies} from  './Urls'
import RowPost from './components/RowPost/RowPost';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix Orginals'/>
      <RowPost url={action} title='ActionMovies' isSmall/>
      <RowPost url={ComedyMovies} title='ComedyMovies' isSmall/>
      <RowPost url={HorrorMovies} title='HorrorMovies' isSmall/>
      <RowPost url={RomanceMovies} title='RomanceMovies' isSmall/>

    </div>
  );
}

export default App;
