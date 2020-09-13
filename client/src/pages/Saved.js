import React, {useState, useEffect} from "react";
import Head from "../components/Head";
import LibraryHead from "../components/LibraryHead";
import { Container } from "react-bootstrap";
import CardResult from "../components/CardResult"
import API from "../utils/API";

function Saved(){

    const [saved, setSaved]= useState([]);

    useEffect(()=>{
        API.getAllBooks()
            .then((res)=>{
                setSaved(res.data);
            });
    }, [setSaved])

    return (
        <div>
            <Head/>
            <LibraryHead/>
            <Container>
                {saved.map(item =><CardResult key={item.googlebookid} book={item}/>)}
            </Container>
        </div>

        
    )
}

export default Saved;