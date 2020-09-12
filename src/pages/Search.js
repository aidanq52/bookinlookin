import React, {useState} from "react";
import {Container} from "react-bootstrap";
import SearchForm from "../components/SearchForm"
import Head from "../components/Head";
import CardResult from "../components/CardResult";

function Search(){

    const [ booksArray, setBooksArray ] = useState([])

    return(
        <div>
            <Container >
                <Head/>
                <hr/>
                <SearchForm setBooksArray={setBooksArray}/>
                <hr/>
                <Container>
                    <h5>What do we have here...</h5>
                    {booksArray.map(item =><CardResult key={item.googlebookID} book={item}/>)}
                </Container>
            </Container>
        </div>

    )

}

export default Search;