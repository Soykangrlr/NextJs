import axios from 'axios'

    export const postUser= axios.create({
            baseURL: 'https://assignment-api.piton.com.tr',
           
            
            headers: {'accept': 'application/json','Content-Type': 'application/json'}
          });
    
