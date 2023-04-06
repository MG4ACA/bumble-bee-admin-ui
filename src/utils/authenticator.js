import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://localhost:8080'
  });

  function generateAccessToken (un, pw){
    return instance.post('/api/v1/admin/login', JSON.stringify({
        "userName": un.value,
        "password": pw.value
    }), {
        headers: {
            "Content-Type": "application/json"
        }
        
    })
    .then(response => {
        if (response.data.code===200) {
            sessionStorage.setItem("jwt", response.data.data)
            
            return response.data.data

        }
      console.log(response);
    })
    .catch(error => {
      console.error(error);
    });

}
        
export default generateAccessToken