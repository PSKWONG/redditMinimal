////////////////////////////Importing//////////////////////

//------------------------Import External Componenet ----------------------
import React from "react";
import { useDispatch, useSelector } from "react-redux";
//------------------------Import Internal Componenet ----------------------
import style from './search.module.css';
import { selectSearchingterms, changeSearchingKeyword } from "./searchSlice";





export function SearchingComponenet() {
    let searchingTerms = useSelector(selectSearchingterms);
    const dispatch = useDispatch();
    const clearSearchGTerm = ()=>{
        dispatch(changeSearchingKeyword(''));
    }
    const handleSearhingTerms=(e)=>{
        dispatch(changeSearchingKeyword(e.target.value));
    }

    

    return (
        <form>
            <input
                type="text"
                className={style.inputTextBox}
                value={searchingTerms}
                onClick={clearSearchGTerm}
                onChange={handleSearhingTerms}
            >
            </input>
            <button className={style.searchingBtn} />
        </form>
    )
};