////////////////////////////Importing//////////////////////

//------------------------Import External Componenet ----------------------
import React from "react";
//------------------------Import Internal Componenet ----------------------
import headerStyle from './header.module.css'
import { SearchingComponenet } from "../../features/searching/search";


export function HeaderComponent (){

    return (
        <div className={headerStyle.headerwrapper}>
            <div className={headerStyle.firstRow}>
                <div className={headerStyle.logoBtn}>
                    <span className={headerStyle.RedditTitle}>Reddit</span>Minimal 
                </div>
                <SearchingComponenet />
            </div>
           

        </div>
    )
}

