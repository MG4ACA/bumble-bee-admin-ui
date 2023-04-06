<template>
    <div class="card flex justify-content-center">
        <div class="flex flex-column md:flex-row w-9">
            <div class="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
                <div class="flex align-items-center gap-2 w-9">
                   <div class="w-full">
                        <label>Username</label>
                        <InputText id="username" type="text" class="w-full" v-model="userName"/>
                   </div>
                    
                </div>
                <div class="flex align-items-center gap-2 w-9">
                    <div class="w-full">
                        <label>Password</label>
                        <InputText id="password" type="password" class="w-full" v-model="password" />
                    </div>
                    
                </div>
                <Button label="Admin Login" icon="pi pi-user" class="w-9" @click="login"></Button>
            </div>
            <div class="w-full md:w-2">
                <Divider layout="vertical" class="hidden md:flex"><b>OR</b></Divider>
                <Divider layout="horizontal" class="flex md:hidden" align="center"><b>OR</b></Divider>
            </div>
            <div class="w-full md:w-5 flex align-items-center justify-content-center py-5">
                <Button label="Customer Register" icon="pi pi-user-plus" severity="success" class="w-9" @click="register"></Button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/userStore'


const userName = ref('')
const password = ref('')
const router = useRouter()
const userStore = useUserStore()


const login = () => {
    console.log('log', typeof userName.value);
    userStore.getAccessToken(userName, password)
    router.push({path: '/admin-panel'})
}

const register = () => {
    
}
</script>

<style>

</style>