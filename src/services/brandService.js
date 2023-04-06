import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080'
  });

  
export default function getBrands(token){
    return instance.get('/api/v1/brand/get-all', {headers: {'Authorization': `Bearer ${token}`}})
        .then(response =>{
            console.log('brand log', response);
            return response.data.data
        })
}
