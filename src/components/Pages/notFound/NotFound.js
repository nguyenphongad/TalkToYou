import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo_TTY from "../../../assets/images_logo/logo_talk-to-you_v2.png"

function NotFound() {

    let history = useNavigate();

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
                        <div className="flex_btn">
                            <div onClick={() => history(-1)} className="text__btn-history">
                                <span> Go back </span>
                            </div>
                            <div onClick={()=>history("/")} className="text__btn-history st_btn_go">
                                <span> Go to your feed</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default NotFound