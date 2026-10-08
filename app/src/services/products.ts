import api from "./api";
import type IProduct from "../interfaces/product";

export const productsService = {
    getProducts: async (): Promise<IProduct[]> =>
        api.get<{ products: IProduct[] }>('/').then(res => res.data.products)
}