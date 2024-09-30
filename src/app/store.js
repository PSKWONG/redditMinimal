
////////////////////////////Importing//////////////////////

//------------------------Import External Componenet ----------------------
import { configureStore } from '@reduxjs/toolkit'
//------------------------Import Internal Componenet ----------------------
import searchingReducer from '../features/searching/searchSlice'

const store =configureStore({
    reducer:{
        searching:searchingReducer,
    }
});

export default store; 