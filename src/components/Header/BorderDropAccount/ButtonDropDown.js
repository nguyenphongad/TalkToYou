import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState, useContext } from 'react';
import UseKey from '../../useKey/Usekey';
import { DropDownAccountButton } from "../Header"
import Avatar_TTY from "../../../assets/images/photo_status_1/avatar_id-1.png"

function ButtonDropDown() {

    const receiveStatefromHead = useContext(DropDownAccountButton);

    const [openDropDown, setOpenDropDown] = useState(false);

    const handleOpenDropDown = () => {
        setOpenDropDown(!openDropDown);

        if (receiveStatefromHead.openDropDownSearch) {
            receiveStatefromHead.setOpenDropDownSearch(false);
        }
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
    function handlecloseModaldropInter() {
        if (openDropDown) setOpenDropDown(false);
    }
    UseKey("Escape", handlecloseModaldropInter);

    return (

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
    )
}

export default ButtonDropDown