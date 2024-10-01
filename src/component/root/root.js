////////////////////////////Importing//////////////////////

//------------------------Import External Componenet ----------------------
import React from 'react';
//------------------------Import Internal Componenet ----------------------
import { HeaderComponent } from '../header/header';
import { PostWrapper } from '../../features/post/postWrapper';

export function Root() {
    return (
        <div className="App">
            <HeaderComponent />
            <PostWrapper />
        </div>
    )
}