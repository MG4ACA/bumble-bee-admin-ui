import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080'
  });

  
export default function getProducts(token){
    return instance.get('/api/v1/product/get-all', {headers: {'Authorization': `Bearer ${token}`}})
        .then(response =>{
            console.log('res log', response);
            return response.data.data
        })
}

