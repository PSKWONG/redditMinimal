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
import {SubRedditIcon} from "./headerIcon"




export function HeaderComponent() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const iconList = subreddit.data




    const handleButtonClick = (event) => {

    }


    return (
        <div className={headerStyle.headerwrapper}>
            <div className={headerStyle.logoBtn} iconid={0} onClick={handleButtonClick}>
                <span className={headerStyle.RedditTitle}>Reddit</span>Minimal
            </div>
            <SearchingComponenet className={headerStyle.searchingWrapper} />
            <div className={headerStyle.redditSliderWrapper}>
                <img src="./media/image/arrowleft.png" className={headerStyle.arrowBtn} />
                <div className={headerStyle.iconWrapper} >
                    {
                        iconList.map((item, index)=>{
                            return < SubRedditIcon position={index}  />
                        })
                    }
                </div>
                <img src="./media/image/arrowright.png" className={headerStyle.arrowBtn} />
            </div>
        </div>
    )
}

