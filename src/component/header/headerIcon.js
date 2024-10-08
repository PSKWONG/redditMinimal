import { useEffect, useState } from "react"

import subreddit from '../../data/subreddit.json'

import style from "./header.module.css"
import { useDispatch } from "react-redux"
import { changePostList } from "../../features/post/postSlice"




export function SubRedditIcon(props){

    const dispatch = useDispatch()

    const [iconVisibility, setIconVisibility] = useState(props.visibility)
    const [iconStyle, setIconStyle] = useState(`${style.iconWrapper}`)

    const {icon, name} = subreddit.data[props.position]

    console.log(props.visibility)

    useEffect(()=>{
        if(iconVisibility === true){
            setIconStyle(`${style.iconWrapper}`)
        }else if(iconVisibility === false){
            setIconStyle(`${style.inactiveIconWrapper}`)
        }

    },[iconVisibility])

   
    const handleOnClick=()=>{
        dispatch(changePostList(props.position))
    }


    return (
        <div onClick={handleOnClick} className={iconStyle}>
            <img src={icon} alt={name} />
            <span>{name}</span>
        </div>
    )
}