import React from "react";
import { memo } from "react";
import { useContext } from "react";
import { ClassContext } from "../../../provider/ClassProvider";

export const GlobalContainer = memo((props) =>{

    const { children }=props;
    const { menuOpenFlag } = useContext(ClassContext);

    return(
        <div id="global-container" className={menuOpenFlag ? "menu-open" : ""} >
            { children }
        </div>
    )
});