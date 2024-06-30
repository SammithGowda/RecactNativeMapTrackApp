import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage";
const instance = axios.create({
    baseURL: 'https://183d-2401-4900-1c17-9580-883-81bd-de06-5767.ngrok-free.app'
});

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err)
    }
)


export default instance