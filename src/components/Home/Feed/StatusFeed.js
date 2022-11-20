import React, { useEffect, useRef, useState } from 'react';

import Avatar_1 from "../../../assets/images/photo_status_TTY/avatar_TTY.png";
import Avatar_2 from "../../../assets/images/photo_status_IU/avatar_IU.jpg";
import Avatar_3 from "../../../assets/images/photo_status_Ngoc/avatar_ngoc.jpg";
import Avatar_4 from "../../../assets/images/photo_status_quyen/avatar_quyen.png";

import Photo_status_id_1_TTY from "../../../assets/images/photo_status_TTY/picture_status_TTY_1.jpg";
import Photo_status_id_1_IU from "../../../assets/images/photo_status_IU/picture_status_IU_2.jpg";
import Photo_status_id_1_ngoc from "../../../assets/images/photo_status_Ngoc/picture_status_ngoc_1.jpg";
import Photo_status_id_1_quyen from "../../../assets/images/photo_status_quyen/picture_status_quyen_1.jpg";

import { Link } from 'react-router-dom';

// import Modal_select from "../../../modal_select_status/modal_select";

// import { AnimatePresence } from "framer-motion";
// import Map from './Map';

// import BackGround from './ModalStatusSize/Background';
// import ModalStatus from './ModalStatusSize/ModalStatus';
import RenderTippy from '../../Tippy/RenderTippy';

function StatusFeed() {
    const up_header_status_user = [
        {
            id: 1,
            id_page_user: '/talktoyou',
            image_avatar: Avatar_1,
            firt_name: "Talk To You",
            last_name: "",
            active_license: true,
            id_user: "@talktoyou",
            active_type_status: "fa-solid fa-badge-check",
            type_post: "Public",
            date_create_status: 1 + " day ago",

            content: "Wecome to TALK TO YOU 🤗 ",
            image: Photo_status_id_1_TTY,
            view_comment: 9.2 + "M",
            view_like: 30.3 + "M",
            view_share: 6 + "M",
        },
        {
            id: 2,
            id_page_user: '/dlwlrma',
            image_avatar: Avatar_2,
            firt_name: "Nguyễn Đình",
            last_name: "Thiên",
            active_license: true,
            id_user: "@dlwlrma",
            active_type_status: "fa-solid fa-badge-check",
            type_post: "Public",
            date_create_status: 2 + " hour ago",

            content: "지은 언니 바빠요?ㅜㅜ 너무 보고 싶어서🤣😂👍",
            image: Photo_status_id_1_IU,
            view_comment: 47.3 + "K",
            view_like: 5.5 + "M",
            view_share: 17.5 + "K",

        },
        {
            id: 3,
            id_page_user: "ngocpham509",
            image_avatar: Avatar_3,
            firt_name: "Ngọc",
            last_name: "Phạm",
            active_license: false,
            id_user: "@ngocpham509",
            active_type_status: "fa-solid fa-badge-check",
            type_post: "Friends",
            date_create_status: 9 + " hour ago",

            content: "Được dịp đi chơi cùng thằng bạn 🤣",
            image: Photo_status_id_1_ngoc,
            view_comment: 5,
            view_like: 99,
            view_share: 4,
        },
        {
            id: 4,
            id_page_user: "tranvanquyen23",
            image_avatar: Avatar_4,
            firt_name: "Trần Văn",
            last_name: "Quyến",
            active_license: false,
            id_user: "@tranvanquyen23",
            active_type_status: "fa-solid fa-badge-check",
            type_post: "Friends",
            date_create_status: 9 + " munite ago",

            content: "Gặp Hiếu PC phải xin kiểu ảnh chớ nhể (●'◡'●)",
            image: Photo_status_id_1_quyen,
            view_comment: 333,
            view_like: 999,
            view_share: 206,
        },
    ];

    const [modal_select, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

    const list_up_status_feed_user = up_header_status_user.map((item_info_header_status) => {

        function TypePost() {
            if (item_info_header_status.type_post === "Public") {
                return (
                    <RenderTippy contentTippy={item_info_header_status.type_post}>
                        <i className="fa-regular fa-earth-americas"></i>
                    </RenderTippy>
                )
            } else if (item_info_header_status.type_post === "Friends") {
                return (
                    <RenderTippy contentTippy={item_info_header_status.type_post}>
                        <i className="fa-regular fa-user-group"></i>
                    </RenderTippy>
                )
            }
        };

        return (
            <div className="box__status" key={item_info_header_status.id}>
                <div className="body__status--table">
                    <div className="item__column--status header__status">
                        <div className="flex--column">
                            <div className="block__item--header block__avatar--user">
                                <div className="border__avatar--user">
                                    <Link to={"#/" + item_info_header_status.id_page_user} className="">
                                        <img src={item_info_header_status.image_avatar} loading="lazy" />
                                    </Link>
                                </div>
                            </div>
                            <div className="block__item--header block__content--picture">
                                <div className="flex__box--inline">
                                    <div className="item__inline">
                                        <div className="name-user">
                                            <Link to={"#/" + item_info_header_status.id_page_user}>
                                                <span className="text__name--user hover_text_under">
                                                    {item_info_header_status.firt_name}&#160;{item_info_header_status.last_name}
                                                </span>
                                                {item_info_header_status.active_license ?
                                                    <RenderTippy contentTippy="Trang cá nhân được xác thực bởi chủ thương hiệu">
                                                        <i className="fa-solid fa-octagon-check"></i>
                                                    </RenderTippy> : ""}
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="item__inline">
                                        <div className="id_user">
                                            <Link to={"#/" + item_info_header_status.id_page_user}>
                                                <span className="hover_text_under">
                                                    {item_info_header_status.id_user}
                                                </span>
                                            </Link>
                                            <i className="fa-regular fa-period"></i>
                                            <div className="icon_tag">
                                                <RenderTippy contentTippy="Feeds">
                                                    <span className="hover_text_under">
                                                        <i className="fa-solid fa-square-rss"></i>
                                                    </span>
                                                </RenderTippy>
                                            </div>

                                            <i className="fa-regular fa-period"></i>

                                            <div className="icon_type">
                                                <TypePost />
                                            </div>

                                            <i className="fa-regular fa-period"></i>

                                            <Link to="#link_status">
                                                <RenderTippy contentTippy={item_info_header_status.date_create_status}>
                                                    <span className="hover_text_under">
                                                        {item_info_header_status.date_create_status}
                                                    </span>
                                                </RenderTippy>
                                            </Link>

                                        </div>
                                    </div>
                                </div>

                                <div className="flex__btn--more"
                                    // onClick={() => (modal_select ? close() : open())}
                                >
                                    <i className="fa-thin fa-arrow-up-right-from-square"></i>
                                </div>

                            </div>
                        </div>


                        <div className="content__status">
                            {item_info_header_status.content}
                        </div>
                    </div>

                    <div className="item__column--status body__status">
                        <Link to="#status_size" className="border__status">
                            <img src={item_info_header_status.image} loading="lazy" />
                        </Link>
                    </div>

                    <div className="item__column control feed__actions__status">
                        <div className="body__actions_status">
                            <div className="item__actions_feed view__actions ">
                                <div className="item_btn_feed--view ">
                                    <RenderTippy contentTippy={item_info_header_status.view_comment + " comments"}>
                                        <span className="hover_text_under">
                                            {item_info_header_status.view_comment} comments
                                        </span>
                                    </RenderTippy>
                                </div>
                                <div className="item_btn_feed--view">
                                    <RenderTippy contentTippy={item_info_header_status.view_like + " likes"}>
                                        <span className="hover_text_under">
                                            {item_info_header_status.view_like} likes
                                        </span>
                                    </RenderTippy>

                                </div>
                                <div className="item_btn_feed--view">
                                    <RenderTippy contentTippy={item_info_header_status.view_share + " shares"}>
                                        <span className="hover_text_under">
                                            {item_info_header_status.view_share} shares
                                        </span>
                                    </RenderTippy>
                                </div>

                            </div>
                            <div className="item__actions_feed feed__action--bar">
                                <div className="item__btn--work-feed box__comment">
                                    <i className="fa-regular fa-comment-lines"></i>
                                    <div className="text__btn--bar"> Comment</div>
                                </div>
                                <div className="item__btn--work-feed box__tym">
                                    <div className="btn__tym">
                                        <i className="fa-light fa-heart"></i>
                                        {/* <i className="fa-solid fa-heart"></i> */}
                                    </div>
                                </div>
                                <div className="item__btn--work-feed box__share">
                                    <i className="fa-regular fa-share-nodes"></i>
                                    <div className="text__btn--bar">Share</div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div >
        )
    })

    return (
        <>

            <div>{list_up_status_feed_user}</div>
            {/* <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
            >
                {modal_select && <ModalStatus
                    modalOpen={modal_select}
                    handleClose={close}
                />}
            </AnimatePresence> */}
        </>
    )

}


export default StatusFeed;

