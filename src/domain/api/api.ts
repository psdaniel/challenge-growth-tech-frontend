import axios from 'axios';
import { GetDataResponse } from './api.types';

export const getData = async (userId: number, companyName: string) => axios.post<GetDataResponse>('http://localhost:3333/api/posts-company', {
    userId,
    companyName
})