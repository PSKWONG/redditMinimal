////////////////////////////Importing//////////////////////

//------------------------Import External Componenet ----------------------
import React from 'react';
//------------------------Import Internal Componenet ----------------------
import { HeaderComponent } from '../header/header';

export function Root() {
    return (
        <div className="App">
            <HeaderComponent />
        </div>
    )
}