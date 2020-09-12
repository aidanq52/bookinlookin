import axios from "axios";


export default{

    getParams(params){
        const queryParams = new URLSearchParams();

        queryParams.append('key',
        //My non functional API key
         "AIzaSyB_UmJRHnuyBJv1LTtyZyYaZ0wPqwt7UDk"
        
        //anothony's functional api key
        //  'AIzaSyB6m3totTNeFiBuXT2orVK3OpM6KInSNqE'

         );

        Object.entries(params).forEach((entry)=>{

            queryParams.append(entry[0], entry[1]);

        });

        return queryParams;
    },

    searchBooks(search){

        return axios.get("https://www.googleapis.com/books/v1/volumes", {
            params: this.getParams({q: search})
        });
    }
}