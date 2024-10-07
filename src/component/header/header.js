////////////////////////////Importing//////////////////////

//------------------------Import External Componenet ----------------------
import React from "react";
import { useDispatch } from "react-redux";
//------------------------Import Internal Componenet ----------------------
import headerStyle from './header.module.css'
import { SearchingComponenet } from "../../features/searching/search";
import subreddit from '../../data/subreddit.json'
import { changePostList, fetchPages } from "../../features/post/postSlice";
import { useNavigate } from "react-router-dom";




export function HeaderComponent() {

    const dispatch = useDispatch();
    const navigate = useNavigate();




    const handleButtonClick =  (event) => {
       
    }


    return (
        <div className={headerStyle.headerwrapper}>
            <div className={headerStyle.firstRow}>
                <div className={headerStyle.logoBtn} iconid={0} onClick={handleButtonClick}>
                    <span className={headerStyle.RedditTitle}>Reddit</span>Minimal
                </div>
                <SearchingComponenet />
            </div>


        </div>
    )
}

