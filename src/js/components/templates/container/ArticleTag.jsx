import React from "react";
import { memo } from "react";


export const ArticleTag = memo((props) =>{

    const {children} = props;

    return (
        <article>
            {children}
        </article>
        
    )
});