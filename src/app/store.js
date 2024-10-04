
////////////////////////////Importing//////////////////////

//------------------------Import External Componenet ----------------------
import { configureStore } from '@reduxjs/toolkit'
//------------------------Import Internal Componenet ----------------------
import searchingReducer from '../features/searching/searchSlice'
import postReducer from '../features/post/postSlice'
import commentReducer from '../features/comment/commentSlice'

const store =configureStore({
    reducer:{
        searching:searchingReducer,
        post:postReducer,
        comment:commentReducer,
    }
});

export default store; 