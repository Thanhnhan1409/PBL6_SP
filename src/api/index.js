// import axios from 'axios'
// import { notify } from '@kyvg/vue3-notification'

// const axiosApiInstance = axios.create()
// axiosApiInstance.defaults.baseURL = import.meta.env.VITE_API_URL

// axiosApiInstance.interceptors.request.use(
//     async (config) => {
//         const access_token = localStorage.getItem('access_token')
//         config.headers = {
//             Authorization: `Bearer ${access_token}`,
//             Accept: 'application/json',
//             'Content-Type': 'application/x-www-form-urlencoded',
//         }
//         return config
//     },
//     (error) => {
//         return Promise.reject(error)
//     }
// )

// axiosApiInstance.interceptors.response.use(
//     (response) => {
//         return response
//     },
//     async function (error) {
//         const originalRequest = error.config
//         if (
//             error.response.status === 401 &&
//             !originalRequest._retry &&
//             originalRequest.url !== '/auth/refresh-tokens' &&
//             originalRequest.url !== '/auth/login'
//         ) {
//             originalRequest._retry = true

//             // Clear the local storage and redirect to the login page
//             notify({
//                 type: 'error',
//                 title: 'Authorization',
//                 text: 'Bạn đã hết phiên đăng nhập, vui lòng đăng nhập lại!',
//             })

//             localStorage.clear()
//             window.location.href = '/login'
//         }
//         return Promise.reject(error)
//     }
// )

// export default axiosApiInstance
import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://44.204.13.30",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default axiosClient;