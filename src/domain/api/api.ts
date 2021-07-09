import axios from 'axios';

export const getPosts = async (userId: number, companyName: string) => axios.post('http://localhost:3333/api/posts', {
    userId,
    companyName
})