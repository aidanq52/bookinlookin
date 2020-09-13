import React from "react";
import {Button} from "react-bootstrap";
import API from "../utils/API";

function ButtonRender({_id}){

    function saveBook(){
        API.addBook(book)
    }

    if(_id){
        return <Button class="librarize" onClick={saveBook}>Librarize!</Button>
    }else{
        return <Button class="librarize" onClick={deleteBook}>Burn it!</Button>
    }
}

export default ButtonRender;