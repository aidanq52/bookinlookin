import React from "react";
import {Row, Col} from "react-bootstrap";

function LibraryHead(){
    return(
        <div>
            <Row>
                <Col class="border-box">
                    <hr/>
                    <h2 class="pageTitle">Your full Library sans tree products</h2>
                </Col>
            </Row>
        </div>
    )
}

export default LibraryHead;