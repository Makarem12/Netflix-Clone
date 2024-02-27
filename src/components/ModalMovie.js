import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';

function ModalMovie(props) {
  const [comment, setComment] = useState('');

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  
  
  const addToFav = async (id, title, path, date, overview, comment) => {
    
    try {
      const serverURL = 'http://localhost:3001/addMovie';
      const response = await fetch(serverURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
          title: title,
          date:date,
          path: path,
          overview:overview,
          comment:comment
        }),
      });
      if (response.ok) {
        
        console.log('Movie added to favorites successfully!');
      } else {
        
        console.error('Failed to add movie to favorites');
      }
    } catch (error) {
      console.error('Error:', error);
    }
    setComment('');
  };





return (
  <>
    <Modal show={props.showModal} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.clickedItem.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={`https://image.tmdb.org/t/p/w500/${props.clickedItem.path}`} />
        <Form.Group controlId="commentForm">
          <Form.Label>Add Comment:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your comment"
            value={comment}
            onChange={handleCommentChange}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => addToFav(props.clickedItem.id, props.clickedItem.title, `https://image.tmdb.org/t/p/w500/${props.clickedItem.path}`, props.clickedItem.date, props.clickedItem.overview, comment)}>
          Submit Comment
        </Button>
      </Modal.Footer>
    </Modal>
  </>
);
}

export default ModalMovie;
