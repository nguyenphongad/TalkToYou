import React from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale-extreme.css';
import "tippy.js/themes/material.css";

function RenderTippy(props) {
    return (
        <Tippy
            content={props.contentTippy}
            animation="scale-extreme"
            delay={200}
            theme="material"
        >
            {props.children}
        </Tippy>
    )
}

export default RenderTippy;