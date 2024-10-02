////////////////////////////Importing//////////////////////

//------------------------Import External Componenet ----------------------
import { createSlice } from "@reduxjs/toolkit";

//------------------------Import Internal Componenet ----------------------
import { fetchPostbyTerm } from "../searching/searchSlice";


const postSlice = createSlice({
    name: 'post',
    initialState: {
        pageInfo: {
            pageName: 'popular',
            pageIcon: '',
        },
        pagePost: [],
        isLoading: false,
        hasError: false,
    },
    reducers: {
        changePage: (state, action) => {
            const { name, icon } = action.payload;
            state.pageInfo.pageName = name;
            state.pageInfo.pageIcon = icon;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPostbyTerm.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(fetchPostbyTerm.rejected, (state) => {
                state.isLoading = false;
                state.hasError = true;
            })
            .addCase(fetchPostbyTerm.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasError = false;
                const { children } = action.payload
                state.pagePost = children
                state.pageInfo.pageName = 'Searching'
            })
    },
    selectors: {
        selectPageInfo: (state) => state.pageInfo,
        selectPagePost: (state) => state.pagePost,
        selectPageLoading: (state) => state.isLoading,
        selectPageError: (state) => state.hasError,
    }
});

export default postSlice.reducer;
export const {
    selectPagePost,
    selectPageLoading,
    selectPageError,
    selectPageInfo
} = postSlice.selectors

