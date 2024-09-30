////////////////////////////Importing//////////////////////

//------------------------Import External Componenet ----------------------
import React from "react";
//------------------------Import Internal Componenet ----------------------
import style from './search.module.css'


export function SearchingComponenet() {
    return (
        <form>
            <input type="text" className={style.inputTextBox}></input>
            <button className={style.searchingBtn} />
        </form>
    )
};