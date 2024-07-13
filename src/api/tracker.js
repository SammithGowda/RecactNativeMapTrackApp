import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage";
export default axios.create({
    baseURL: 'https://track-server-r96y.onrender.com'
});

// instance.interceptors.request.use(
//     async (config) => {
//         const token = await AsyncStorage.getItem('token');
//         console.log(token,"token")
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (err) => {
//         console.log(`Error while axios instance ${err}`)
//         return Promise.reject(err)
//     }
// )