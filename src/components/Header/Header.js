import { useEffect, useRef, useState } from "react";
import { withErrorBoundary } from "react-error-boundary";

import ErrorComponent from "../../Errors/ErrorBoundary";
import Logo_TTY from "../../assets/images_logo/logo_talk-to-you_v2.png";
import CustomMenuHeader from "../Header/CustomMenuHeader/CustomMenuHeader";
import ModalMation from "../Modal/ModalMation/ModalMation";

// import Avatar_TTY from "../../assets/images/photo_status_1/avatar_id-1.png";

import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import UseKey from "../useKey/Usekey";
import { useContext } from "react";
import { OpenModalProvider } from "../Interactive/DropDownReels/StateReelProvider";
import ButtonDropDown from "./BorderDropAccount/ButtonDropDown";
import { createContext } from "react";

export const DropDownAccountButton = createContext();

function Header() {

    const [openDropDownSearch, setOpenDropDownSearch] = useState(false);
    const [openDropModalThink, setDropModalThink] = useState(false);

    const openModal_think = () => {
        setDropModalThink(true);
        document.body.style.overflowY = "hidden";
    }
    const closeModal_think = () => {
        setDropModalThink(false);
        document.body.style.removeProperty('overflow');
    }

    function handlecloseModaldropInter() {
        if (openDropDownSearch) setOpenDropDownSearch(false);
        if (openDropModalThink) {
            setDropModalThink(false);
            document.body.style.removeProperty('overflow');
        }
    }
    UseKey("Escape", handlecloseModaldropInter);

    const TextContentModalThink = () => {
        return (
            <div>
                Hi everybody, đây là một bản beta bởi mình ấp ủ nó suốt thời gian học
                bắt đầu đại học đến giờ,mình sẽ sáng tạo 1 cái giao diện mới cùng với kết hợp mp3
                để nó gọi là "sống động" một chút. Nó còn rất nhiều cái thiếu sót. <br></br>
                Mọi người nhận xét và cho em xin lời góp ý ạ. Em cảm ơn rất nhiều!<br></br>
                <div style={{ 'float': 'right' }}>Nguyễn Văn Phong</div>
            </div>
        );
    }

    const handleOpenDropDownSearch = () => {
        setOpenDropDownSearch(!openDropDownSearch);
    }

    const list_history_search = [
        "Nguyễn Đình Thiên",
        "#xuhuong",
        "Người tôi yêu là ai?"
    ]
    const list_History = list_history_search.map((index) => {
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

    const toStateValueReel = useContext(OpenModalProvider);

    const valueHeadToBtnAccount = {
        openDropDownSearch,
        setOpenDropDownSearch,
        handleOpenDropDownSearch
    }

    return (
        <>
            <DropDownAccountButton.Provider value={valueHeadToBtnAccount}>
                <div
                    className={`header ${toStateValueReel.openModalDropReel
                        ? "isHide_header-active-reel" : "isShow_header-active-reel"}`}>
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
                                <CustomMenuHeader />
                            </div>
                            <div className={`box__dropdown--search ${openDropDownSearch ? 'active_Search' : 'inactive_Search'}`} >
                                <div className="container__box--search" >
                                    <div className="border-icon-search">
                                        <i className="fa-regular fa-magnifying-glass"></i>
                                    </div>
                                    <div className="ctr__search-flex">
                                        <input
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
                                <ButtonDropDown />
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
            </DropDownAccountButton.Provider>
        </>
    )
}


export default withErrorBoundary(Header, {
    FallbackComponent: ErrorComponent,
});
