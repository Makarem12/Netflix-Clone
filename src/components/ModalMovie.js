import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ModalMovie = ({ movie, addToFavorites }) => {
  const [comment, setComment] = useState('');

  const handleAddToFavorites = () => {
    addToFavorites(movie, comment);
    
  };

  return (
    <Modal show={true} onHide={() => {}}>
      <Modal.Header closeButton>
        <Modal.Title>{movie.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={movie.img} alt={movie.name} />
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment..."
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleAddToFavorites}>
          Add to Favorites
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalMovie;
