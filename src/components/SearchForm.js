import React from "react";
import {Row, Form, Button} from "react-bootstrap";

function SearchForm(){
    return(
        <div>
            <Row>
                <Form>
                    <Form.Group>
                        <h5>Tipity Typity look for that book SON</h5>
                        <Form.Control type="book" placeholder="go on then, search somefin'"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">Search</Button>
                </Form>
            </Row>
        </div>
    )
}


export default SearchForm;