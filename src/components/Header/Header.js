// import {useState } from 'react';

import { withErrorBoundary } from "react-error-boundary";

import ErrorComponent from "../../Errors/ErrorBoundary";
import Logo_TTY from "../../assets/images_logo/logo_talk-to-you_v2.png";
import CustomLink from "../../routes/customLink";

import Avatar_IU from "../../assets/images/avatar_IU.jpg";
import { useEffect, useRef, useState } from "react";

function Header() {
    const [openDropDown, setOpenDropDown] = useState(false);
    let dropRef = useRef();

    useEffect(()=>{
        let handler = (e) => {
            if(!dropRef.current.contains(e.target)){
                setOpenDropDown(false);
            }
        }
        document.addEventListener("mousedown",handler);
        return() =>{
            document.removeEventListener("mousedown",handler);
        };
    });

    return (
        <div className="header">
            <div className="header__wrap--row">
                <div className="item__header-wrap wrap__item--box_first">
                    <div className="item_box_fisrt box__logo">
                        <a href="#home">
                            <img src={Logo_TTY} alt="logo" />
                        </a>
                    </div>
                    <div className="item_box_fisrt box__navication">
                        <div className="btn_checked_navication">
                            <div>Version</div>
                            <i className="fa-duotone fa-circle-info"></i>
                        </div>
                    </div>
                </div>
                <div className="item__header-wrap wrap__item--navMenu">
                    <div className="body__container--navMenu">
                        <CustomLink to="/feed" >
                            <i class="fa-light fa-house-chimney"></i>
                            <div className="item__text--status"> Home</div>
                        </CustomLink>
                        <CustomLink to="/watching" >
                            <i className="fa-light fa-clapperboard-play"></i>
                            <div className="item__text--status"> Watching</div>
                        </CustomLink>
                        <CustomLink to="/marketplace" >
                            <i class="fa-light fa-cart-shopping-fast"></i>
                            <div className="item__text--status">Marketplace</div>
                        </CustomLink>
                        <CustomLink to="/music" >
                            <i className="fa-light fa-folder-music"></i>
                            <div className="item__text--status"> Music</div>
                        </CustomLink>
                        <CustomLink to="/learning" >
                            <i class="fa-light fa-graduation-cap"></i>
                            <div className="item__text--status"> Learning</div>
                        </CustomLink>
                    </div>
                </div>
                <div className="item__header-wrap wrap__item--accsign" ref={dropRef}>
                    <div className="body__container--boxDropDown">
                        <div className="item__btn-dropDown btn__dropDown--search">
                            <div className="border_search--header">
                                <i class="fa-regular fa-magnifying-glass"></i>
                            </div>
                        </div>
                        <div className="item__btn-dropDown btn__dropDown--account" >
                            <div 
                            className={`border__img-avatar--header ${openDropDown ? 'activeBtnDrop' : 'a'}`}
                            onClick={()=>{setOpenDropDown(!openDropDown)}}>
                                <img src={Avatar_IU}/>
                            </div>
                        </div>

                        <div className={`dropdown__accsign--account ${openDropDown ? 'active' : 'inactive'}`} >
                            <div className="box__dropwn--account">
                                <div className="item__dropwn--account" onClick={()=>{setOpenDropDown(false)}}>
                                    <i class="fa-duotone fa-gear"></i>
                                    Cài đặt
                                </div>
                                <div className="item__dropwn--account" onClick={()=>{setOpenDropDown(false)}}>
                                    <i class="fa-duotone fa-screencast"></i>
                                    Chế độ & màn hình
                                </div>
                                <div className="item__dropwn--account" onClick={()=>{setOpenDropDown(false)}}>
                                    <i class="fa-duotone fa-keyboard"></i>
                                    Phím tắt & hỗ trợ
                                </div>
                                <div className="item__dropwn--account" onClick={()=>{setOpenDropDown(false)}}>
                                    <i class="fa-duotone fa-circle-info"></i>
                                    Trợ giúp
                                </div>
                                <div style={{fontWeight:'780'}} className="item__dropwn--account" onClick={()=>{setOpenDropDown(false)}}>
                                    <i class="fa-solid fa-right-from-bracket"></i>
                                    Đăng xuất
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

<CustomLink></CustomLink>

export default withErrorBoundary(Header, {
    FallbackComponent: ErrorComponent,
});
