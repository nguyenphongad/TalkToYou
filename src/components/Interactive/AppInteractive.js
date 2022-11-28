import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react';
import ButtonDropDown from '../Header/BorderDropAccount/ButtonDropDown';
import Header from '../Header/Header';
import UseKey from '../useKey/Usekey';
import DropReels from './DropDownReels/DropReels';
import { OpenModalProvider } from './DropDownReels/StateReelProvider';
import RenderListMenuMore from './ListMenuMore/RenderListMenuMore';
import RenderMessenger from './Messenger/RenderMessenger';
import RenderNotification from './Notification/RenderNotification';


function ItemModalDrops(props) {
    return (
        <div className={`wrap_dropdown-interactive ${props.className}`}>
            {props.children}
        </div>
    )
}

function AppInteractive() {

    const [openModalDropChat, setOpenModalDropChat] = useState(false);
    const [openModalDropNoti, setOpenModalDropNoti] = useState(false);
    const [openModalDropMenuMore, setOpenModalDropMenuMore] = useState(false);

    const handleOpenDropChat = () => { setOpenModalDropChat(!openModalDropChat); }
    const handleOpenDropNoti = () => { setOpenModalDropNoti(!openModalDropNoti); }
    const handleOpenDropMenuMore = () => { setOpenModalDropMenuMore(!openModalDropMenuMore); }

    let dropRefModalChat = useRef();
    let dropRefModalNoti = useRef();
    let dropRefModalMenuMore = useRef();

    useEffect(() => {
        let handlerChat = (e) => {
            if (!dropRefModalChat.current.contains(e.target))
                setOpenModalDropChat(false);
        }
        document.addEventListener("mousedown", handlerChat);
        return () => document.removeEventListener("mousedown", handlerChat);
    });

    useEffect(() => {
        let handlerNoti = (e) => {
            if (!dropRefModalNoti.current.contains(e.target))
                setOpenModalDropNoti(false);
        }
        document.addEventListener("mousedown", handlerNoti);
        return () => document.removeEventListener("mousedown", handlerNoti);
    });
    useEffect(() => {
        let handlerMenuMore = (e) => {
            if (!dropRefModalMenuMore.current.contains(e.target))
                setOpenModalDropMenuMore(false);
        }
        document.addEventListener("mousedown", handlerMenuMore); 
        return () => document.removeEventListener("mousedown", handlerMenuMore);
    });

    function handlecloseModaldropInter() {
        if (openModalDropChat) setOpenModalDropChat(false);
        if (openModalDropNoti) setOpenModalDropNoti(false);
        if (openModalDropMenuMore) setOpenModalDropMenuMore(false);

    }
    UseKey("Escape", handlecloseModaldropInter);

    const toStateValueReel = useContext(OpenModalProvider);

    return (
        <div className="wrap__interactive">
            <div className="body__interactive--row">
                <div 
                className={`item__control--inter ${toStateValueReel.openModalDropReel ? "disable_btn-border-reel" : ""}`} >
                    <div className="border-style-btn"
                    onClick={toStateValueReel.handleOpenDropReel}>
                        <i className="fa-solid fa-elevator"></i>
                    </div>
                </div>
                <div className="item__control--inter" ref={dropRefModalChat}>
                    <div className={`border-style-btn ${openModalDropChat ? 'isActiveBorder-btn' : ''}`}
                        onClick={handleOpenDropChat}>
                        <i class="fa-solid fa-comment-lines"></i>
                    </div>

                    <ItemModalDrops className={openModalDropChat ? 'isShow' : 'isHide'}>
                        <RenderMessenger />
                    </ItemModalDrops>
                </div>
                <div className="item__control--inter" ref={dropRefModalNoti}>
                    <div className={`border-style-btn ${openModalDropNoti ? 'isActiveBorder-btn' : ''}`}
                        onClick={handleOpenDropNoti}>
                        <i className="fa-solid fa-bell"></i>
                    </div>

                    <ItemModalDrops className={openModalDropNoti ? 'isShow' : 'isHide'}  >
                        <RenderNotification />
                    </ItemModalDrops>
                </div>
                <div className="item__control--inter" ref={dropRefModalMenuMore}>
                    <div className={`border-style-btn ${openModalDropMenuMore ? 'isActiveBorder-btn' : ''}`}
                        onClick={handleOpenDropMenuMore}>
                        <i
                            className={`fa-solid fa-plus ${openModalDropMenuMore ? 'rotateInIconDrop' : 'rotateUnIconDrop'}`}>

                        </i>
                    </div>

                    <ItemModalDrops
                        className={`setHeightAutoMenuMore ${openModalDropMenuMore ? 'isShow' : 'isHide'}`}>
                        <RenderListMenuMore />
                    </ItemModalDrops>

                </div>
            </div>

            <div className={`wrap_drop--reel ${toStateValueReel.openModalDropReel ? 'isShow-display' : 'isHide-display'}`}>
                <div className="header__drop-tr">
                    <div className="tr_line">
                        <div className="item_col--reel btn_heading-reel">
                            <div className="text_heading-reel">Reels</div>
                        </div>
                        <div className="item_col--reel btn_close-reel">
                            <ButtonDropDown/>
                            <div className="border_btn_closeDrops--reel" onClick={toStateValueReel.handleCloseDropReel}>
                                <i class="fa-solid fa-xmark"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <DropReels/>
            </div>

        </div>
    )
}

export default AppInteractive;