import axios from 'axios'


const api= {
    register: (registerDto) =>
        axios.post("v1/auth/register",registerDto)
}

export default api;