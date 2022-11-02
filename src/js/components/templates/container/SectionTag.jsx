import React from "react";
import { memo } from "react";


export const SectionTag = memo((props) =>{

    const {children,className=""} = props;

    return (
        <section className={className}>
            {children}
        </section>
    )
});