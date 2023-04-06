import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080'
  });

  
export default function getCategories(token){
    return instance.get('/api/v1/category/get-all', {headers: {'Authorization': `Bearer ${token}`}})
        .then(response =>{
            console.log('category log', response);
            return response.data.data
        })
}
