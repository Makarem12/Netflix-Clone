import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import ModalMovie from './ModalMovie';
function Movie({ movie}) {
  const { id, title, date, overview, path } = movie;
  const [showModal, setShowModal] = useState(false)
  const [clickedItem, setClickedItem] = useState({})

  const handleShow = (movie) => {
    setShowModal(true);
    console.log(movie)
    setClickedItem(movie)
}
const handleClose = () => {
  setShowModal(false);
}



  return (
    <>
    <Col xs={12} sm={6} md={4} lg={3}> 
      <Card style={{ marginBottom: '20px' }}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${path}`} alt="Movie image" />
        <Card.Body>
          <Card.Title>ID: {id}</Card.Title>
          <Card.Title>Name: {title}</Card.Title>
          <Card.Title>Date: {date}</Card.Title>
          <Card.Title>Overview:</Card.Title>
          <Card.Text>{overview}</Card.Text>
          <Button variant="primary" onClick={() => { handleShow(movie) }}>
            Add to Favorite
          </Button>
        </Card.Body>
      </Card>
    </Col>
    <ModalMovie showModal={showModal} handleClose={handleClose} clickedItem={clickedItem} movie={movie}/>
    </>
  );
}

export default Movie;
