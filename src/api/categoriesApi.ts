import { api } from "./configs/axiosConfig";
import {
    CategoryId,
    CreateCategoryInput,
    UpdateCategoryInput,
} from "./schemas";

const CATEGORIES_ENDPOINT = "/categories";

export const categoriesApi = {
    getAll: async function () {
        const response = await api.get(CATEGORIES_ENDPOINT);
        return response.data;
    },
    create: async function (category: CreateCategoryInput) {
        const response = await api.post(CATEGORIES_ENDPOINT, category);
        return response.data;
    },
    update: async function (args: UpdateCategoryInput) {
        const response = await api.patch(CATEGORIES_ENDPOINT, args.values, {
            params: args.categoryId,
        });
        return response.data;
    },
    delete: async function (id: CategoryId) {
        const response = await api.delete(CATEGORIES_ENDPOINT, {
            params: id,
        });
        return response.data;
    },
};
