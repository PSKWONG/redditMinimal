import { useState } from "react"

import subreddit from '../../data/subreddit.json'

import style from "./header.module.css"
import { useDispatch } from "react-redux"
import { changePostList } from "../../features/post/postSlice"




export function SubRedditIcon(props){

    const dispatch = useDispatch()

    const [iconVisibility, setIconVisibility] = useState(true)

    const {icon, name} = subreddit.data[props.position]

    const handleOnClick=()=>{
        dispatch(changePostList(props.position))
    }


    return (
        <div onClick={handleOnClick} className={style.iconItem}>
            <img src={icon} alt={name}  className={style.headerIcon}/>
            {name}
        </div>
    )
}