////////////////////////////Importing//////////////////////

//------------------------Import External Componenet ----------------------
import React from "react";
//------------------------Import Internal Componenet ----------------------


export function HTMLConvertor(props){
    const {input}= props

    if (input !== null){

        function htmlDecode(input){
            var e = document.createElement('div');
            e.innerHTML = input;
            return e.childNodes[0].nodeValue;
          }

        return (
            <div>
            {htmlDecode(input)}
            </div>
        )
        
    }
}


/*

function htmlDecode(input){
  var e = document.createElement('div');
  e.innerHTML = input;
  return e.childNodes[0].nodeValue;
}

*/