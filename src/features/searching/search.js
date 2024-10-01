////////////////////////////Importing//////////////////////

//------------------------Import External Componenet ----------------------
import React from "react";
import { useDispatch, useSelector } from "react-redux";
//------------------------Import Internal Componenet ----------------------
import style from './search.module.css';
import { selectSearchingterms, changeSearchingKeyword } from "./searchSlice";
import { fetchPostbyTerm } from "./searchSlice";




////////////////////////////Conmponenet//////////////////////
export function SearchingComponenet() {
    let searchingTerms = useSelector(selectSearchingterms);
    const dispatch = useDispatch();
 //------------------------TextBox Handling  ----------------------   
    const clearSearchGTerm = ()=>{
        dispatch(changeSearchingKeyword(''));
    }
    const handleSearhingTerms=(e)=>{
        dispatch(changeSearchingKeyword(e.target.value));
    }
//------------------------Searching Fetching ----------------------
    const handleFetchSearching = (event)=>{
        event.preventDefault();
        dispatch(fetchPostbyTerm(searchingTerms));
    }

    

    return (
        <form onSubmit={handleFetchSearching}>
            <input
                type="text"
                className={style.inputTextBox}
                value={searchingTerms}
                onClick={clearSearchGTerm}
                onChange={handleSearhingTerms}
            />
            
            <input type="submit" className={style.searchingBtn} value="" />
        </form>
    )
};