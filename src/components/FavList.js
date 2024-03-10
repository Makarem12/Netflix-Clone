import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function FavList(){
    const [moviesArray, setmoviesArray] = useState([]);
    const [newComment, setNewComment] = useState("");
    const sendReq = async () => {
        const serverURL = `http://localhost:3001/getMovies`;
        const res = await fetch(serverURL);
        const jsonRes = await res.json();
        console.log(jsonRes)
        setmoviesArray(jsonRes);
    }

    useEffect(() => {
        sendReq();
    }, [])

    const deleteMovie = async (id) => {
        console.log("Deleting movie with id:", id);
        const serverURL = `https://movies-server-f3zt.onrender.com/DELETE/${id}`;
        const res = await fetch(serverURL, {method: "DELETE"});
        setmoviesArray(moviesArray.filter(movie => movie.id !== id));

    }
    const updateMovie = async (id, newComment) => {
        try {
            await fetch(`https://movies-server-f3zt.onrender.com/UPDATE/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ comment: newComment })
            });
            
            setmoviesArray(moviesArray.map(movie => movie.id === id ? { ...movie, comment: newComment } : movie));
        } catch (error) {
            console.error("Error updating comment:", error);
        }
    };


    return (
        <>
       
            <Row xs={1} md={4} className="g-4">
            {moviesArray.map((item) => {
                return <Col key={item.id}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.path} />
                        <Card.Body>
                            <Card.Title>Name : {item.title}</Card.Title>
                            <Card.Text>
                               Date : {item.date}
                            </Card.Text>
                            <Card.Title>
                                overview :
                            </Card.Title>
                            <Card.Text>
                                {item.overview}
                            </Card.Text>
                            <Card.Text>
                               Your Comment :  {item.comment}
                            </Card.Text>
                            <div>
                                <textarea rows="3" cols="30" defaultValue={item.comment} onChange={(e) => setNewComment(e.target.value)}></textarea>
                            </div>
                            <Button variant="outline-danger" onClick={() => { deleteMovie(item.id) }}>Delete</Button>
                            <Button variant="outline-primary" onClick={() =>{updateMovie(item.id, newComment)}}>Update</Button>
                        </Card.Body>
                    </Card>
                </Col>
            })}
            </Row>
        </>
    )
}
export default FavList;