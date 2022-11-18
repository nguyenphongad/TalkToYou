
import Tippy from '@tippyjs/react';
import React from 'react'
import { Link } from 'react-router-dom';

import Avatar_id_1 from "../../../assets/images/photo_friend_request/photo_user_id_1.png";
import Avatar_id_2 from "../../../assets/images/photo_friend_request/photo_user_id_2.png";

function Complementary() {

    const listInfotificationComple = [
        {
            id: 1,
            nameLink: " About",
        },
        {
            id: 2,
            nameLink: " Accessbility",
        },
        {
            id: 3,
            nameLink: " Help Center",
        },
        {
            id: 4,
            nameLink: " Private & Terms",
            icon_after: "fa-regular fa-circle-info"
        },
        {
            id: 5,
            nameLink: " Adverting",
            icon_after: "fa-light fa-rectangle-ad"
        },
        {
            id: 6,
            nameLink: " More",
        },
        {
            id: 7,
            nameLink: " Talk To You v2",
            icon_after: "fa-solid fa-comments"
        },
    ];
    const listRenderInfo = listInfotificationComple.map((index) => {
        return (
            <div className="item_select--Tolink" key={index.id}>
                <a href="#">
                    <i className={index.icon_after}></i>
                    {index.nameLink}
                </a>
            </div>

        )
    });
    const listDemandRequest = [
        {   
            id_user: 1,
            avatar_user: Avatar_id_1,
            name_user: "Đặng Quốc Chiến",
            time_request: "1 hour ago"
        },
        {   
            id_user :2,
            avatar_user: Avatar_id_2,
            name_user: "Nguyễn Hường",
            time_request: "2 weeks ago"
        }
    ]
    const listItemuUserReq = listDemandRequest.map((index) => {
        return (
            <div className="item_demand--block" key={index.id_user}>
                <div className="item__demand--inline">
                    <div className="border_img-avatar">
                        <Link to="#">
                            <img src={index.avatar_user} loading="lazy"/>
                        </Link>
                    </div>
                </div>
                <div className="item__demand--inline block--name">
                    <div className="item_demand--name name_user-style">
                        <Link to="#">
                            {index.name_user}
                        </Link>
                    </div>
                    <div className="item_demand--name time_req-style">
                        {index.time_request}
                    </div>
                </div>
                <div className="item__demand--inline btn_press-demand">
                    <div className="float-item-btn">

                        <div className="border_press-demand">
                            <i className="fa-regular fa-check"></i>
                        </div>
                        <div className="border_press-demand">
                            <i className="fa-regular fa-xmark"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="complementary">
            <div className="item_tr--comple body__request">
                <div className="box_request--fr">
                    <div className="heading_text--rq">
                        Friend request
                    </div>
                    <div className="body_out-request">
                        {listItemuUserReq}
                        <div className="btn_show-allReq">
                            <Link to="#" >View all</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item_tr--comle body__sticky">
                <div className="box__ads--slide">
                    Advertisement
                </div>
                <div className="box_select_completary">
                    {listRenderInfo}
                </div>
            </div>

        </div>
    )
}

export default Complementary;