////////////////////////////Importing//////////////////////

//------------------------Import External Componenet ----------------------
import React from "react";
//------------------------Import Internal Componenet ----------------------
import style from './post.module.css'
import { Post } from "./post";

export function PostWrapper(){

    return (
        <div className={style.postWrapper}>
            <Post />
        </div>
    );
}