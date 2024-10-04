////////////////////////////Importing//////////////////////

//------------------------Import External Componenet ----------------------
import React from "react";
import { useDispatch, useSelector } from "react-redux";
//------------------------Import Internal Componenet ----------------------
import style from './comment.module.css'
import { VideoPlayer } from "../../component/mediaPlayer/videoPlayer";
import { selectCommentLoading, selectCommentPost, selectPostTimeCreated } from "./commentSlice";
import { GalleryContainer } from "../../component/mediaPlayer/gallery";
//import { HTMLConvertor } from "./htmlTextDisplayer";


export function CommentWrapper() {

    const fetchData = useSelector(selectCommentPost)
    const LoadingStatus = useSelector(selectCommentLoading);
    const TimeCreated = useSelector(selectPostTimeCreated)

    if (LoadingStatus === true) {
        return (
            <div>
                <img src="./media/image/loading-gif.gif" alt="Loading" width={"100px"} />
            </div>
        )
    } else if (fetchData.length !== 0) {

        const { title, is_video, media, url, author } = fetchData[0].data.children[0].data;
        console.log(fetchData, 'Comment Wrapper');

        const mediaInfo = {
            is_video,
            media,
            url
        };

        return (
            <div className={style.commentContainer}>
                <h2> {title} </h2>

                <div className={style.extradata}>
                    Posted by <strong> {author} </strong>
                    <span className={style.divider}> &#8226;</span>
                    {TimeCreated} ago
                </div>
                <VideoPlayer mediaInfo={mediaInfo} />
                <GalleryContainer mediaInfo={mediaInfo} />


            </div>
        )
    }


}