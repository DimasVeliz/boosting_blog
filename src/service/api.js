import axios from 'axios'


const api = {
    register: (registerDto) =>
        axios.post("v1/auth/register", registerDto),
    login: (authenticateDto) =>
        axios.post("v1/auth/authenticate", authenticateDto)
}

export default api;