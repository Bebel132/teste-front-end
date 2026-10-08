import type { AxiosInstance } from "axios";
import axios from "axios";

const createApiInstance = async (): Promise<AxiosInstance> => {
    return axios.create({
        baseURL: "http://127.0.0.1:3000/products/"
    })
}

const api = await createApiInstance();

export default api;