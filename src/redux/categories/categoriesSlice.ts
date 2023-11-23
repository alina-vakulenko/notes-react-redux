import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";
import { categoriesApi } from "@/api/categoriesApi";
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
import { isLoading, isError } from "../utils";

type CategoriesState = {
    status: RequestStatus;
    error: string | null;
    data: Category[];
    count: number;
};

export const initialState: CategoriesState = {
    status: "idle",
    error: null,
    data: [],
    count: 0,
};

export const fetchCategories = createAsyncThunk<
    FetchCategoriesResponse,
    FetchCategoriesInput,
    { rejectValue: string }
>("categories/fetchCategories", async (_, { rejectWithValue }) => {
    try {
        return await categoriesApi.getAll();
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
        return await categoriesApi.create(category);
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
        return await categoriesApi.update(args);
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
        return await categoriesApi.delete(categoryId);
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
                state.data = action.payload.categories;
                state.count = action.payload.count;
            })
            .addCase(addCategory.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data.push(action.payload);
                state.count += 1;
            })
            .addCase(updateCategory.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = state.data.map((item) => {
                    if (item.id === action.payload.id) {
                        return action.payload;
                    }
                    return item;
                });
            })
            .addCase(deleteCategory.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = state.data.filter(
                    (category: Category) => category.id !== action.payload.id
                );
                state.count -= 1;
            })
            .addMatcher(isLoading, (state) => {
                state.status = "loading";
                state.data = [];
                state.count = 0;
                state.error = null;
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.status = "failed";
                state.error = action.payload;
                state.data = [];
                state.count = 0;
            });
    },
});

export const selectCategories = (state: RootState) => state.categories;

export default categoriesSlice.reducer;
