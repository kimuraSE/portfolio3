import React from "react";
import { memo } from "react";


export const Container = memo((props) =>{
    const {children}=props;

    
    return(
        <div id="container">
            {children}
        </div>
    )
});