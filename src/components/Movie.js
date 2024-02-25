import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ModalMovie from './ModalMovie';

function Movie({ movie, addMovieToDatabase }) {
  const { id, title, date, overview, path } = movie;
<ModalMovie/>
  const handleAddToDatabase = () => {
    
    addMovieToDatabase(movie);
  };

  return (
    <Col xs={12} sm={6} md={4} lg={3}> 
      <Card style={{ marginBottom: '20px' }}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${path}`} alt="Movie image" />
        <Card.Body>
          <Card.Title>ID: {id}</Card.Title>
          <Card.Title>Name: {title}</Card.Title>
          <Card.Title>Date: {date}</Card.Title>
          <Card.Title>Overview:</Card.Title>
          <Card.Text>{overview}</Card.Text>
          <Button variant="primary" onClick={handleAddToDatabase}>
            Add to Database
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Movie;
