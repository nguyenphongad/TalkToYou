import React from 'react';
import Logo from "../assets/images_logo/logo_talk-to-you_v2.png"

function LoadingStart() {
    return (
        <div className="body_loading_start">
            <div className="wrap_loading">
                <div className="logo__loading">
                    <img src={Logo} alt="logo" />
                    <div className="text__loading-right-logo">Talk To You</div>
                </div>
                <div className="animation__loading-border">
                    <div className="border__loading--line">
                        <div className="underline__loading--item">
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LoadingStart;