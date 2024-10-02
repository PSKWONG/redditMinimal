////////////////////////////Importing//////////////////////

//------------------------Import External Componenet ----------------------
import React from "react";
import { useSelector } from "react-redux";
//------------------------Import Internal Componenet ----------------------
import style from './post.module.css'
import { Post } from "./post";
import { selectPageLoading, selectPagePost } from "./postSlice";



export function PostList() {

    let pagePost = useSelector(selectPagePost);
    let LoadingStatus = useSelector(selectPageLoading);

    if (LoadingStatus === true) {
        return(
            <div>
                <img src="./media/image/loading-gif.gif" alt="Loading" width={"100px"} />
            </div>
        )
    } else if (pagePost.length !== 0) {
        return (
            <div className={style.postList}>
                {
                    pagePost.map((post) => {
                        const data = post.data;
                        const postID = data.id
                        return <Post data={data} key={postID} />
                    })
                }
            </div>
        )
    }

}