import React from "react";
import { memo } from "react";


export const HeaderTag = memo((props) =>{

    const {children,className=""} = props;

    return (
        <header className={className}>
            {children}
        </header>
    )
});