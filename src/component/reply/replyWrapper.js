
////////////////////////////Importing//////////////////////

//------------------------Import External Componenet ----------------------
import React, { useEffect, useState } from "react";
//------------------------Import Internal Componenet ----------------------
import style from "./reply.module.css"
import { ReplyComponent } from "./reply";


export function RepliesWrapper(props) {

    const replyList = props.replies.children
    const replyListLength = replyList.length;
    const [indexInterval, setIndexInterval] = useState(50)
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(startIndex + indexInterval)
    //const [display,setDisplay] =useState(props.display)

    useEffect(() => {
        if (replyListLength < indexInterval) {
            setEndIndex(replyListLength)
        }
    }, [])



    const handleMoreButton = () => {
        if (endIndex + indexInterval < replyListLength) {
            setEndIndex(endIndex + indexInterval)
        } else {
            setEndIndex(replyListLength)
        }
    }




    if (props.display === true) {
        console.log('ReplyWrapper is triggered')

        return (
            <div>
                {
                    replyList.map(({ data }, index) => {
                        if (index <= endIndex) {
                            return < ReplyComponent key={index} position={index} replyInfo={data} />
                        }
                    })
                }
                <div onClick={handleMoreButton}> More button </div>
            </div>
        );
    }
}