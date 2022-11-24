import { useEffect, useRef, useState } from "react";
import { withErrorBoundary } from "react-error-boundary";

import ErrorComponent from "../../Errors/ErrorBoundary";
import Logo_TTY from "../../assets/images_logo/logo_talk-to-you_v2.png";
import CustomLink from "../../routes/customLink";
import ModalMation from "../Modal/ModalMation/ModalMation";

import Avatar_TTY from "../../assets/images/photo_status_1/avatar_id-1.png";

import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import UseKey from "../useKey/Usekey";

function Header() {
    const [openDropDown, setOpenDropDown] = useState(false);
    const [openDropDownSearch, setOpenDropDownSearch] = useState(false);
    const [openDropModalThink, setDropModalThink] = useState(false);
    
    const openModal_think  = () => {
        setDropModalThink(true);
        document.body.style.overflowY = "hidden";
    }
    const closeModal_think = () => {
        setDropModalThink(false);
        document.body.style.removeProperty('overflow');
    }

    function handlecloseModaldropInter(){
        if(openDropDown) setOpenDropDown(false);
        if(openDropDownSearch) setOpenDropDownSearch(false);
        if(openDropModalThink) {
            setDropModalThink(false);
            document.body.style.removeProperty('overflow');
        }
    }
    UseKey("Escape",handlecloseModaldropInter);

    const TextContentModalThink = () =>{
        return (
            <>
                <div>
                    Hi everybody, đây là một bản beta bởi mình ấp ủ nó suốt thời gian học 
                    bắt đầu đại học đến giờ,mình sẽ sáng tạo 1 cái giao diện mới cùng với kết hợp mp3
                    để nó gọi là "sống động" một chút. Nó còn rất nhiều cái thiếu sót. <br></br>
                    Mọi người nhận xét và cho em xin lời góp ý ạ. Em cảm ơn rất nhiều!<br></br>
                    <div style={{ 'float': 'right' }}>Nguyễn Văn Phong</div>
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

    const list_history_search =[
        "Nguyễn Đình Thiên",
        "#xuhuong",
        "Người tôi yêu là ai?"
    ]
    const list_History = list_history_search.map((index)=>{
        return (
            <div className="item_content_before--search" key={index}>
                <i className="fa-light fa-clock-rotate-left"></i>
                    <span className="name_history">
                        {index} 
                    </span>
                    
                <div className="icon_delete__history">
                    <i className="fa-regular fa-xmark"></i> 
                </div>
            
            </div>
        )
    })

    return (
        <>
            <div className="header" >
                <div className="header__wrap--row">
                    <div className="item__header-wrap wrap__item--box_first">
                        <div className="item_box_fisrt box__logo">
                            <Link to="/feed">
                                <img src={Logo_TTY} alt="logo" />
                            </Link>
                        </div>
                        <div className="item_box_fisrt box__navication">
                            <div className="btn_checked_navication"
                                onClick={() => (openDropModalThink ? closeModal_think() : openModal_think())}>
                                <div>Version</div>
                                <i className="fa-duotone fa-circle-info"></i>
                            </div>
                        </div>
                        <AnimatePresence
                            initial={false}
                            exitBeforeEnter={true}
                            onExitComplete={() => null}
                        >
                            {openDropModalThink && <ModalMation
                                modalOpen={openDropModalThink}
                                handleClose={closeModal_think}
                                text_header="Talk To You V2"
                                content_modal={<TextContentModalThink />}
                            />}
                        </AnimatePresence>
                    </div>
                    <div className="item__header-wrap wrap__item--navMenu">
                        <div className={`body__container--navMenu ${openDropDownSearch ? 'an-navMenu-drops-search-true' : ' an-navMenu-drops-search-false'}`}>
                            <CustomLink to="/feed" >
                                <i className="fa-light fa-house-chimney"></i>
                                <div className="item__text--status"> Home</div>
                            </CustomLink>
                            <CustomLink to="/watching" >
                                <i className="fa-light fa-clapperboard-play"></i>
                                <div className="item__text--status"> Watching</div>
                            </CustomLink>
                            <CustomLink to="/music" >
                                <i className="fa-light fa-folder-music"></i>
                                <div className="item__text--status"> Music</div>
                            </CustomLink>
                            <CustomLink to="/marketplace" >
                                <i className="fa-light fa-cart-shopping-fast"></i>
                                <div className="item__text--status">Marketplace</div>
                            </CustomLink>
                            <CustomLink to="/typay" >
                                <i class="fa-light fa-credit-card"></i>
                                <div className="item__text--status"> TY Pay</div>
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
                                            <i class="fa-duotone fa-user-headset"></i>
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
                <div className="wrap_box_suggest--search">
                    <div className="box__suggest--search">
                        <div className="heading_sg">Try searching for</div>
                        {list_History}
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
