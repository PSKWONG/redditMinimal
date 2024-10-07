import { useState } from "react"

import subreddit from '../../data/subreddit.json'

import style from "./header.module.css"




export function HeaderIcon(props){
    const [iconVisibility, setIconVisibility] = useState(true)

    const {icon, name} = subreddit.data[props.position]

    const handleOnClick=()=>{
        props.navigate(props.position)
    }


    return (
        <div onClick={handleOnClick}>
            <img src={icon} alt={name}  className={style.headerIcon}/>
            {name}
        </div>
    )
}