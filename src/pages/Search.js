import React from "react";
import {Container, Row, Col, Button, Card} from "react-bootstrap";
import SearchForm from "../components/SearchForm"
import SearchHead from "../components/SearchHead"

function CardResult({book}){

    console.log(book)
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
                            <Button class="librarize">Librarize!</Button>
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

function Search({resultsArray}){

    console.log(resultsArray[0])
    return(
        <div>
            <Container >
                {SearchHead()}
                <hr/>
                {SearchForm()}
                <hr/>
                <Container>
                    <h5>What do we have here...</h5>
                    {resultsArray.map(item =><CardResult key={item.googlebookid} book={item}/>)}
                </Container>
            </Container>
        </div>

    )

}

export default Search;