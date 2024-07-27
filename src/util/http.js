import axios from "axios";

const https = axios.create({
    timeout: 60000,
    headers:{ "Content-Type": "application/json"}
});
export const setupInterceptor = (store)=>{
    https.interceptors.response.use(
        (response)=>{
            return response;
        },
        (error)=>{
            return Promise.reject(error);
        }
    );
    https.interceptors.request.use((config)=>{
        const { token } = store.getState().authentication;
        config.headers.Authorization=`Bearer ${token}`;

        return config;
    });
}
export default https;