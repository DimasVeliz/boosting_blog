import axios from 'axios'


const api = {
    register: (registerDto) =>
        axios.post("api/v1/auth/register", registerDto),
    login: (authenticateDto) =>
        axios.post("api/v1/auth/authenticate", authenticateDto),
    logout: (authenticateDto) =>
        axios.post("api/v1/auth/logout", authenticateDto),
    getTopics: async () =>
        axios.get("api/v1/data/blog/topics"),
    getPostsForTopic: (id) =>
        axios.get("api/v1/data/blog/posts", {
            params: {
                topicId: id
            }
        })
}

export default api;