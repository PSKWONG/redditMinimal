////////////////////////////Importing//////////////////////

//------------------------Import External Componenet ----------------------
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
//------------------------Import Internal Componenet ----------------------
import headerStyle from './header.module.css'
import { SearchingComponenet } from "../../features/searching/search";
import subreddit from '../../data/subreddit.json'
import { changePostList, fetchPages } from "../../features/post/postSlice";
import { useNavigate } from "react-router-dom";
import { SubRedditIcon } from "./headerIcon"




export function HeaderComponent() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [iconVisibilityList, setIconVisibilityList] = useState([])

    const iconList = subreddit.data


    useEffect(()=>{
        const target = iconList.length
        
        
        const current = iconVisibilityList.length
        console.log(target,current, "visibility")
        for(let i = 0 ; i<target; i++){
            setIconVisibilityList((prev)=>{
                return [...prev, true]
            })
        }

    },[])




    return (
        <div className={headerStyle.headerwrapper}>
            <div className={headerStyle.logoBtn} >
                <span className={headerStyle.RedditTitle}>Reddit</span>Minimal
            </div>
            <SearchingComponenet className={headerStyle.searchingWrapper} />
            <div className={headerStyle.redditSliderWrapper}>
                <img src="./media/image/arrowleft.png" className={headerStyle.arrowBtn} />
                <div className={headerStyle.iconList} >
                    {
                        iconList.map((item, index) => {
                            return < SubRedditIcon position={index} visibility={iconVisibilityList[index]} />
                        })
                    }
                </div>
                <img src="./media/image/arrowright.png" className={headerStyle.arrowBtn} />
            </div>
        </div>
    )
}

