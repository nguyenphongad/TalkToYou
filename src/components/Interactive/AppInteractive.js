import React, { useEffect, useRef, useState } from 'react'
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

    const handelOpenDropChat = () => {
        setOpenModalDropChat(!openModalDropChat);

    }
    const handelOpenDropNoti = () => {
        setOpenModalDropNoti(!openModalDropNoti);

    }
    let dropRefModalChat = useRef();
    let dropRefModalNoti = useRef();

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

    return (
        <div className="wrap__interactive">
            <div className="body__interactive--row">
                <div className="item__control--inter">
                    <div className="border-style-btn">
                        <i className="fa-solid fa-elevator"></i>
                    </div>
                </div>
                <div className="item__control--inter" ref={dropRefModalChat}>
                    <div className={`border-style-btn ${openModalDropChat ? 'isActiveBorder-btn' : ''}`}
                        onClick={handelOpenDropChat}>
                        <i className="fa-solid fa-comment"></i>
                    </div>

                    <ItemModalDrops className={openModalDropChat ? 'isShow' : 'isHide'}>
                        <RenderMessenger />
                    </ItemModalDrops>
                </div>
                <div className="item__control--inter" ref={dropRefModalNoti}>
                    <div className={`border-style-btn ${openModalDropNoti ? 'isActiveBorder-btn' : ''}`}
                        onClick={handelOpenDropNoti}>
                        <i className="fa-solid fa-bell"></i>
                    </div>

                    <ItemModalDrops className={openModalDropNoti ? 'isShow' : 'isHide'}  >
                        <RenderNotification />
                    </ItemModalDrops>
                </div>
                <div className="item__control--inter">
                    <div className="border-style-btn">
                        <i className="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AppInteractive;