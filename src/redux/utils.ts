import { AnyAction } from "@reduxjs/toolkit";

export const isError = (action: AnyAction) => {
    return action.type.endsWith("rejected");
};

export const isLoading = (action: AnyAction) => {
    return action.type.endsWith("pending");
};
