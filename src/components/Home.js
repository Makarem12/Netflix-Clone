import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";
import ModalMovie from "./ModalMovie";
import './Home.css';

function Home() {
    const [moviesArr, setMoviesArr] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const sendReq = async () => {
        const serverURL = `http://localhost:3001/trending`;
        const res = await fetch(serverURL);
        const jsonRes = await res.json();
        console.log(jsonRes);
        setMoviesArr(jsonRes);
    };

    useEffect(() => {
        sendReq();
    }, []);


    return (
        <>
           <MovieList moviesArr={moviesArr}/> </>) 
      
}

export default Home;
