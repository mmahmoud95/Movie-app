import axios, { AxiosInstance } from 'axios';
import { API_BASE } from './Constants';

export const axiosInstance: AxiosInstance = axios.create({
    baseURL: API_BASE,
});
