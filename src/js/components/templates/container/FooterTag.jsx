import React from "react";
import { memo } from "react";


export const FooterTag = memo((props) =>{

    const {children,className=""} = props;

    return (
        <footer className={className}>
            {children}
        </footer>
    )
});