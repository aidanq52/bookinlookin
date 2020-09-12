import React, {useRef} from "react";
import {Row, Form, Button} from "react-bootstrap";
import googleBooksAPI from "../utils/googleBooksAPI"

function SearchForm({setBooksArray}){
    
    const searchInput = useRef();

    function handleSubmit(e){
        e.preventDefault();
        googleBooksAPI
            .searchBooks(searchInput.current.value)
            .then(result=>{

                setBooksArray(result.data.items.map(item=>({
                    title: item.volumeInfo.title,
                    link: item.volumeInfo.previewLink,
                    description: item.volumeInfo.description,
                    image: item.volumeInfo.imageLinks.thumbnail,
                    authors: item.volumeInfo.authors,
                    googleBooksID: item.id
                })));

            })
    }

    return(
        <div>
            <Row>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <h5>Tipity Typity look for that book SON</h5>
                        <Form.Control type="text" placeholder="go on then, search somefin'" ref={searchInput}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">Search</Button>
                </Form>
            </Row>
        </div>
    )
}


export default SearchForm;