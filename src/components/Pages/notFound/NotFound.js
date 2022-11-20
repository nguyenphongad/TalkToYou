import React from 'react'
import { Link } from 'react-router-dom'
import Logo_TTY from "../../../assets/images_logo/logo_talk-to-you_v2.png"

function NotFound() {
    return (
        <>
            <div className="body__notFound">
                <div className="header__line">
                    <div className="box__logo">
                        <Link to="/feed">
                            <img src={Logo_TTY} alt="logo" />
                        </Link>
                    </div>
                </div>
                <div className="block__comlumn--notFound">
                    <div className="item__notification--notFound">
                        <i class="fa-duotone fa-link-slash"></i>
                        <div className="text_h2">404 - Not Found </div>
                    </div>
                    <div className="item__notification--notFound">
                        <div className="text__notification--notFound">
                            Please check your URL or return to Talk To You home
                        </div>
                    </div>
                    <div className="item__notification--notFound">
                        <a href="/feed" className="text__go-home">
                            <span> Go to your feed</span>
                        </a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default NotFound