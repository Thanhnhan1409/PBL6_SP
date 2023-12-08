import axiosApiInstance from "@/api"

export const uploadImage = async (data) => {
    return await axiosApiInstance.post(``,data)
}

export const test = async () => {
    return await axiosApiInstance.get('engagements');
}

