import React from "react";
import {Card, Col, Button, Row} from "react-bootstrap";
import API from "../utils/API";

function CardResult({book}){

    function saveBook(){
        API.addBook(book);
    }
 
    return(
        <div>
            <Card>
                <Card.Body>
                    <Row>
                        <Col>
                            <Card.Title>{book.title}</Card.Title>
                            <Card.Text>Author: {book.authors[0]}</Card.Text>
                        </Col>
                        <Col md={{span:2}}>
                            <Button href={book.link}>View</Button>
                            <Button class="librarize" onClick={saveBook}>Librarize!</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="auto"><img src={book.image} alt={`${book.title} book cover`}></img></Col>
                        <Col>{book.description}</Col>
                    </Row>
                </Card.Body>                        
            </Card>
        </div>
    )
}

export default CardResult;