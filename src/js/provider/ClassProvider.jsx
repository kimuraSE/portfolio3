import React from "react";
import { useState } from "react";
import { createContext } from "react";


export const ClassContext = createContext();

export const ClassProvider = (props) =>{

    const {children}=props;
    const [menuOpenFlag,setMenuOpenFlag]=useState(false);

    return(
        <ClassContext.Provider value={{menuOpenFlag,setMenuOpenFlag}} >
            {children}
        </ClassContext.Provider>
    )
}