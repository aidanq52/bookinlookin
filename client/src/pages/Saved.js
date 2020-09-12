import React from "react";
import Head from "../components/Head";
import LibraryHead from "../components/LibraryHead";
import { Container } from "react-bootstrap";
import CardResult from "../components/CardResult"

function Saved({resultsArray}){
    return (
        <div>
            <Head/>
            <LibraryHead/>
            <Container>
                {resultsArray.map(item =><CardResult key={item.googlebookid} book={item}/>)}
            </Container>
        </div>

        
    )
}

export default Saved;