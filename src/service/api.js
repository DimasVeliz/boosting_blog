import axios from 'axios'


const api= {
    register: (registerDto) =>
        axios.post("http://localhost:8080/api/v1/auth/register",registerDto)
}

export default api;