import React from "react";
import { memo } from "react";


export const MainTag = memo((props) =>{

    const {children} = props;

    return (
        <main>
            {children}
        </main>
    )
});