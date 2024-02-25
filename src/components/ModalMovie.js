import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addMovieToDatabase } from './api'; 


function ModalMovie({ movie, show, handleClose }) {
  const [comment, setComment] = useState('');

  const handleAddToFavorites = async () => {
    try {
      
      await addMovieToDatabase({ ...movie, comment });
      handleClose(); 
    } catch (error) {
      console.error('Error adding movie to favorites:', error);
      
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{movie.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.path}`} alt="Movie image" />
        <p>{movie.overview}</p>
        <Form.Group controlId="comment">
          <Form.Label>Add a comment:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleAddToFavorites}>
          Add to Favorites
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalMovie;
