import { axiosPrivate } from "./Api";
import { useEffect } from "react";
import AuthService from "./Auth.Services";

const useAxiosPrivate = () => {
    const token = AuthService.getCurrentUser();
    useEffect(() => {
        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                config.headers['Authorization'] = `Bearer ${token}`
                config.headers['Content-Type'] = 'application/json'
                return config;
            }, (error) => Promise.reject(error)
        );
        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
        }
    }, [token])

    return axiosPrivate;
}

export default useAxiosPrivate;