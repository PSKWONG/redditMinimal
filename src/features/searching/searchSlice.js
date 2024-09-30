////////////////////////////Importing//////////////////////

//------------------------Import External Componenet ----------------------
import { createSlice } from "@reduxjs/toolkit";
//------------------------Import Internal Componenet ----------------------

const searchingSlice = createSlice({
    name:'searching',
    initialState:{
        keyword:"Search relevant post(s) ",
    },
    reducers:{
        changeSearchingKeyword:(state,action)=>{
            state.keyword = action.payload
        }
    }
});

export const selectSearchingterms = (state)=>state.searching.keyword;
export const {changeSearchingKeyword} = searchingSlice.actions;
export default searchingSlice.reducer;

