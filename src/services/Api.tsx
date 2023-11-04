import axios from 'axios';
export default axios.create({
    baseURL: "https://reqres.in"
});
export const axiosPrivate = axios.create({
    baseURL: "https://reqres.in"
});