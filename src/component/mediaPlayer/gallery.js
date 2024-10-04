////////////////////////////Importing//////////////////////

//------------------------Import External Componenet ----------------------
import React from "react";
//------------------------Import Internal Componenet ----------------------
import style from "./mediaPlayer.module.css"

export function GalleryContainer(props) {
    const {is_video,url} = props.mediaInfo;
    

    if (is_video === true) {
        return <></>
    } else if (url !== "") {
        return (
            <img src={url} alt="Commentimage" className={style.imgContainer}/>
        )
    }
}