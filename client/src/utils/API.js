import axios from "axios";

export default{
    addBook(data){
        return axios.post("/api/books", data);
    },

    deleteBook(){

    },

    getAllBooks(){
        
    }
}