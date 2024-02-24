import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ModalMovie from "./ModalMovie";
import './Home.css';

function Home() {
    const [moviesArr, setMoviesArr] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null); // Add this line to declare selectedMovie state

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

    const handleOpenModal = (movie) => {
        setSelectedMovie(movie);
    };

    const handleCloseModal = () => {
        setSelectedMovie(null);
    };

    const addToFavorites = (movie, comment) => {
        
        console.log("Adding to favorites:", movie, "with comment:", comment);
    };

    return (
        <>
            <Row xs={1} md={4} className="g-4">
                {moviesArr.map((item) => {
                    return (
                        <Col key={item.id}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" alt="Movie image" src={item.path} />
                                <Card.Body>
                                    <Card.Title>ID: {item.id}</Card.Title>
                                    <Card.Title>Name:{item.title}</Card.Title>
                                    <Card.Title>Date: {item.date}</Card.Title>
                                    <Card.Title>overview:</Card.Title>
                                    <Card.Text>
                                        {item.overview}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => handleOpenModal(item)}>Add to Fav</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
            {selectedMovie && (
                <ModalMovie
                    movie={selectedMovie}
                    addToFavorites={addToFavorites}
                />
            )}
        </>
    );
}

export default Home;
