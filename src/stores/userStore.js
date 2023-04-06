import { defineStore } from 'pinia'
import { ref } from 'vue'
import generateAccessToken from '../utils/Authenticator'

export const useUserStore = defineStore('UserStore', () => {
    const accessToken = ref('')
    const userName = ref('')
    const password = ref('')

    const getAccessToken = async(username, pword) => {
        userName.value = username
        password.value = pword
        // console.log('logger un and pw ', userName.value, password.value);

        accessToken.value = await generateAccessToken(username, pword)
        return accessToken.value
    }
    const getGeneratedAccessToken = () => {
        // console.log('access token log ', accessToken.value);
        accessToken.value = getAccessToken(userName.value, password.value)
        return accessToken.value
    }
    
    return{
        accessToken,
        getAccessToken,
        getGeneratedAccessToken
        
    }
})