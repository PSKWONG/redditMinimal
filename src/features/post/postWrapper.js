////////////////////////////Importing//////////////////////

//------------------------Import External Componenet ----------------------
import React from "react";
import { useSelector } from "react-redux";
//------------------------Import Internal Componenet ----------------------
import style from './post.module.css'
import { selectPageInfo } from "./postSlice";
import { PostList } from "./postList";


export function PostWrapper(){

    const {pageName,pageIcon} = useSelector(selectPageInfo)

    return (
        <div className={style.postWrapper}>
            <div className={style.pageInfo}>
                {pageName}
                {pageIcon}
            </div>
            <PostList />

        </div>
    );
}