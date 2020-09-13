import axios from "axios";

export default{
    addBook(data){
        return axios.post("/api/addBook", data);
    },

    deleteBook(id){
        return axios.delete(`/api/burnBook/${id}`)
    },

    getAllBooks(){
        return axios.get("/api/library");
    }
}