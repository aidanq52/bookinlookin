import axios from "axios";

export default{
    addBook(data){
        return axios.post("/api/addBook", data);
    },

    deleteBook(){

    },

    getAllBooks(){
        return axios.get("/api/library");
    }
}