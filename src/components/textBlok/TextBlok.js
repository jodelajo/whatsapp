import React from "react";
import './TextBlok.css'

export default function TextBlok({text, className}){
    return(
        <div className={className}>
          {text}
        </div>
    )
}