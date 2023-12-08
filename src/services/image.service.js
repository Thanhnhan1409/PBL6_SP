import axiosApiInstance from "@/api"

export const uploadImage = async (data) => {
return await axiosApiInstance.post(``,data,{headers: {
    "Content-Type": "multipart/form-data",
}
})}

// export const test = async () => {
//     return await axiosApiInstance.get('engagements');
// }

// import axiosClient from "@/api";
// import axios from 'axios';
// const uploadImageApi = {
//   uploadImage(data) {
//     const apiUrl = "http://44.204.13.30/"; // Replace with your API endpoint

//     axios
//       .post(apiUrl, data)
//       .then((response) => {
//         // Handle successful response
//         console.log("Files uploaded successfully!", response);
//       })
//       .catch((error) => {
//         // Handle error response
//         console.error("Error uploading files.", error);
//       });
//   },
//   getAll() {
//     return axiosClient.get("");
//   },
//   postTest(data) {
//     return axiosClient.get("");
//   },
// };

// export default uploadImageApi;