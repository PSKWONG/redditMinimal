import React from "react";
import headerStyle from './header.module.css'


export function HeaderComponent (){

    return (
        <div className={headerStyle.headerwrapper}>
            <div className={headerStyle.firstRow}>
                <div className={headerStyle.logoBtn}>
                    <span className={headerStyle.RedditTitle}>Reddit</span>Minimal 
                </div>
            </div>
        </div>
    )
}

