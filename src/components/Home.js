import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";

import './Home.css';

function Home() {
    const [moviesArr, setMoviesArr] = useState([]);
   

    const sendReq = async () => {
        const serverURL = `https://movies-server-f3zt.onrender.com/trending`;
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
