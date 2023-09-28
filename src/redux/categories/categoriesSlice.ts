import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";
import { CategoryService } from "@/api/CategoryService";
import { isLoading, isError } from "../utils";
import {
    RequestStatus,
    Category,
    FetchCategoriesInput,
    CreateCategoryInput,
    UpdateCategoryInput,
    DeleteCategoryInput,
    FetchCategoriesResponse,
    CreateCategoryResponse,
    UpdateCategoryResponse,
    DeleteCategoryResponse,
} from "@/api/schemas";

type CategoriesState = {
    status: RequestStatus;
    error: string | null;
    categoriesList: Category[];
    categoriesCount: number;
};

export const initialState: CategoriesState = {
    status: "idle",
    error: null,
    categoriesList: [] as Category[],
    categoriesCount: 0,
};

export const fetchCategories = createAsyncThunk<
    FetchCategoriesResponse,
    FetchCategoriesInput,
    { rejectValue: string }
>("categories/fetchCategories", async (_, { rejectWithValue }) => {
    try {
        return await CategoryService.getAll();
    } catch (err: unknown) {
        if (err instanceof Error) {
            return rejectWithValue("Failed to load categories. " + err.message);
        }
        return "Failed to load categories. Server error.";
    }
});

export const addCategory = createAsyncThunk<
    CreateCategoryResponse,
    CreateCategoryInput,
    { rejectValue: string }
>("categories/addCategory", async (category, { rejectWithValue }) => {
    try {
        return await CategoryService.create(category);
    } catch (err) {
        if (err instanceof Error) {
            return rejectWithValue("Failed to add category. " + err.message);
        }
        return "Failed to add category. Server error";
    }
});

export const updateCategory = createAsyncThunk<
    UpdateCategoryResponse,
    UpdateCategoryInput,
    { rejectValue: string }
>("notes/updateNote", async (args, { rejectWithValue }) => {
    try {
        return await CategoryService.update(args);
    } catch (err) {
        if (err instanceof Error) {
            return rejectWithValue("Failed to update category. " + err.message);
        }
        return "Failed to update category. Server error";
    }
});

export const deleteCategory = createAsyncThunk<
    DeleteCategoryResponse,
    DeleteCategoryInput,
    { rejectValue: string }
>("categories/deleteCategory", async (categoryId, { rejectWithValue }) => {
    try {
        return await CategoryService.delete(categoryId);
    } catch (err) {
        if (err instanceof Error) {
            return rejectWithValue("Failed to delete category. " + err.message);
        }
        return "Failed to delete category. Server error";
    }
});

const categoriesSlice = createSlice({
    name: "categories",
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.categoriesList = action.payload.categories;
                state.categoriesCount = action.payload.count;
            })
            .addCase(addCategory.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.categoriesList.push(action.payload);
                state.categoriesCount += 1;
            })
            .addCase(updateCategory.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.categoriesList = state.categoriesList.map((item) => {
                    if (item.id === action.payload.id) {
                        return action.payload;
                    }
                    return item;
                });
            })
            .addCase(deleteCategory.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.categoriesList = state.categoriesList.filter(
                    (category: Category) => category.id !== action.payload.id
                );
                state.categoriesCount -= 1;
            })
            .addMatcher(isLoading, (state) => {
                state.status = "loading";
                state.categoriesList = [];
                state.categoriesCount = 0;
                state.error = null;
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.status = "failed";
                state.error = action.payload;
                state.categoriesList = [];
                state.categoriesCount = 0;
            });
    },
});

const selectCategories = (state: RootState) => state.categories.categoriesList;

export { categoriesSlice, selectCategories };

export default categoriesSlice.reducer;
