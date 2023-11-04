import axios from 'axios';
const BASE_URL = "https://reqres.in";
export default axios.create({
    baseURL: "https://reqres.in"
});
export const axiosPrivate = axios.create({
    baseURL: "https://reqres.in"
});