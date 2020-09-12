import React from "react";
import {Container} from "react-bootstrap";
import SearchForm from "../components/SearchForm"
import Head from "../components/Head";
import CardResult from "../components/CardResult";


function Search({resultsArray}){

    console.log(resultsArray[0])
    return(
        <div>
            <Container >
                <Head/>
                <hr/>
                <SearchForm/>
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