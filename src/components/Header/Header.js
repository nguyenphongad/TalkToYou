import { useEffect, useRef, useState } from "react";
import { withErrorBoundary } from "react-error-boundary";

import ErrorComponent from "../../Errors/ErrorBoundary";
import Logo_TTY from "../../assets/images_logo/logo_talk-to-you_v2.png";
import CustomLink from "../../routes/customLink";
import ModalMation from "../Modal/ModalMation/ModalMation";

import Avatar_TTY from "../../assets/images/photo_status_TTY/avatar_TTY.png";

import { AnimatePresence } from "framer-motion";
import LoadingPage from "../../views/LoadingPage";


function Header() {
    const [openDropDown, setOpenDropDown] = useState(false);
    const [openDropDownSearch, setOpenDropDownSearch] = useState(false);
    const [modalOpen_think, setModalOpen] = useState(false);

    const openModal_think = () => {
        setModalOpen(true);
        document.body.style.overflowY = "hidden";
        document.body.style.paddingRight = "16px";
        document.getElementById("hu").style.paddingRight = "16px";
    }
    const closeModal_think = () => {
        setModalOpen(false);
        document.body.style.removeProperty('overflow');
        document.body.style.paddingRight = "0px";
        document.getElementById("hu").style.paddingRight = "0px";
    }


    function TextContentModalThink() {
        return (
            <>
                <div>
                    Hi everybody, đây là một bản beta bởi mình ấp ủ nó suốt thời gian học đại học đến giờ,
                    mình sẽ sáng tạo 1 cái giao diện mới cùng với kết hợp mp3
                    để nó gọi là "sống động" một chút. Nó còn rất nhiều cái thiếu sót. <br></br>
                    Mọi người nhận xét và cho em xin lời góp ý ạ. Em cảm ơn rất nhiều!<br></br>
                    <div style={{ 'float': 'right' }}>NV Phong</div>
                </div>
            </>
        );
    }

    let dropRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!dropRef.current.contains(e.target))
                setOpenDropDown(false);
        }
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    });

    const handleOpenDropDownSearch = () => {
        setOpenDropDownSearch(!openDropDownSearch);
    }
    const handleOpenDropDown = () => {
        setOpenDropDown(!openDropDown);
        
        if (openDropDownSearch) {
            setOpenDropDownSearch(false);
        }


    }

    return (
        <>
            <div className="header" >
                <div className="header__wrap--row" id="hu">
                    <div className="item__header-wrap wrap__item--box_first">
                        <div className="item_box_fisrt box__logo">
                            <a href="#home">
                                <img src={Logo_TTY} alt="logo" />
                            </a>
                        </div>
                        <div className="item_box_fisrt box__navication">
                            <div className="btn_checked_navication"
                                onClick={() => (modalOpen_think ? closeModal_think() : openModal_think())}>
                                <div>Version</div>
                                <i className="fa-duotone fa-circle-info"></i>
                            </div>
                        </div>
                        <AnimatePresence
                            initial={false}
                            exitBeforeEnter={true}
                            onExitComplete={() => null}
                        >
                            {modalOpen_think && <ModalMation
                                modalOpen={modalOpen_think}
                                handleClose={closeModal_think}
                                text_header="Talk To You V2"
                                content_modal={<TextContentModalThink />}
                            />}
                        </AnimatePresence>
                    </div>
                    <div className="item__header-wrap wrap__item--navMenu">
                        <div className={`body__container--navMenu ${openDropDownSearch ? 'an-navMenu-drops-search-true' : 'an-navMenu-drops-search-false'}`}>
                            <CustomLink to="/feed" >
                                <i className="fa-light fa-house-chimney"></i>
                                <div className="item__text--status"> Home</div>
                            </CustomLink>
                            <CustomLink to="/watching" >
                                <i className="fa-light fa-clapperboard-play"></i>
                                <div className="item__text--status"> Watching</div>
                            </CustomLink>
                            <CustomLink to="/marketplace" >
                                <i className="fa-light fa-cart-shopping-fast"></i>
                                <div className="item__text--status">Marketplace</div>
                            </CustomLink>
                            <CustomLink to="/music" >
                                <i className="fa-light fa-folder-music"></i>
                                <div className="item__text--status"> Music</div>
                            </CustomLink>
                            <CustomLink to="/learning" >
                                <i className="fa-light fa-graduation-cap"></i>
                                <div className="item__text--status"> Learning</div>
                            </CustomLink>
                        </div>
                        <div className={`box__dropdown--search ${openDropDownSearch ? 'active_Search' : 'inactive_Search'}`} >
                            <div className="container__box--search" >
                                <div className="border-icon-search">
                                    <i className="fa-regular fa-magnifying-glass"></i>
                                </div>
                                <div className="ctr__search-flex">
                                    <input
                                        // autoFocus
                                        type="text"
                                        placeholder="Search on Talk To You"
                                        id="yourtextbox"
                                        autoComplete="off"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item__header-wrap wrap__item--accsign" >
                        <div className="body__container--boxDropDown" >

                            <div className="item__btn-dropDown btn__dropDown--search"
                                onClick={handleOpenDropDownSearch}>
                                <div className="border_search--header">
                                    <i className={openDropDownSearch ? "fa-regular fa-bars" : "fa-regular fa-magnifying-glass"}></i>
                                </div>
                            </div>
                            <div className="item__btn-dropDown btn__dropDown--account" ref={dropRef}>
                                <div
                                    className={`border__img-avatar--header ${openDropDown ? 'activeBtnDrop' : ''}`}
                                    onClick={handleOpenDropDown} >
                                    <img src={Avatar_TTY} />
                                </div>
                                <div className={`dropdown__accsign--account ${openDropDown ? 'active' : 'inactive'}`}>
                                    <div className="box__dropwn--account" >
                                        <div className="item__dropwn--account" onClick={() => { setOpenDropDown(false) }}>
                                            <i className="fa-solid fa-user"></i>
                                            Personal page
                                        </div>
                                        <div className="item__dropwn--account" onClick={() => { setOpenDropDown(false) }}>
                                            <i className="fa-duotone fa-gear"></i>
                                            Setting
                                        </div>
                                        <div className="item__dropwn--account" onClick={() => { setOpenDropDown(false) }}>
                                            <i className="fa-duotone fa-screencast"></i>
                                            Mode & Screen
                                        </div>
                                        <div className="item__dropwn--account" onClick={() => { setOpenDropDown(false) }}>
                                            <i className="fa-duotone fa-keyboard"></i>
                                            Shortcuts & Support
                                        </div>
                                        <div className="item__dropwn--account" onClick={() => { setOpenDropDown(false) }}>
                                            <i className="fa-duotone fa-circle-info"></i>
                                            Help
                                        </div>
                                        <div style={{ fontWeight: '780' }} className="item__dropwn--account" onClick={() => { setOpenDropDown(false) }}>
                                            <i className="fa-solid fa-right-from-bracket"></i>
                                            Log out
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className={`wrap__drops-suggest--search ${openDropDownSearch ? 'display-block-drops-search' : 'display-none-drops-search'}`}>
                <div className="brg__drops--search" onClick={() => { setOpenDropDownSearch(false) }}>
                </div>
                <div className="box__suggest--search">
                    <div className="text_warning">Try searching for</div>
                    <div className="item_content_before--search">
                        <i className="fa-light fa-clock-rotate-left"></i>
                        Nguyễn Đình Thiên
                    </div>
                    <div className="item_content_before--search">
                        <i className="fa-light fa-clock-rotate-left"></i>
                        #xuhuong
                    </div>
                    <div className="item_content_before--search">
                        <i className="fa-light fa-clock-rotate-left"></i>
                        đáp án momo sự kiện
                    </div>
                </div>
            </div>
        </>
    )
}

<CustomLink></CustomLink>

export default withErrorBoundary(Header, {
    FallbackComponent: ErrorComponent,
});
