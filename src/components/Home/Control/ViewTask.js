import React from 'react';
import Avatar_1 from "../../../assets/images/photo_status_1/avatar_id-1.png";
import CoverBgr_1 from "../../../assets/images/photo_cover_img/cover_bgr_home.jpg";
import { Link } from 'react-router-dom';


function ViewTask() {
    return (
        <div className="viewTask">
            <div className="box__view-account">
                {/* <div className="brg_cover-img">
                    <img src={CoverBgr_1} />
                </div> */}
                <div className="body_view-acc">
                    <div className="info_view-acc">
                        <div className="border_avt--img-view-acc">
                            <img src={Avatar_1} />
                        </div>
                        <div className="nameUser_view-acc">
                            <div className="name-user">
                                Talk To You
                                <i className="fa-solid fa-octagon-check"></i>
                            </div>
                            <div className="name_id">@talktoyou</div>
                        </div>
                    </div>
                    <div className="content_bio">
                        You only live once, but if you do it right, once is enough
                    </div>
                    <div className="shopping_cart_link">
                        <i class="fa-light fa-cart-shopping"></i> Shopping cart
                    </div>
                    <div className="size-tr-cardPay">
                        <i class="fa-light fa-user-music"></i>
                        <span>
                            <i class="fa-light fa-credit-card"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div className="box_menuTask">
                <div className="body_menuTask">
                    <div className="item__menu--task">
                        <Link to="#">
                            <i class="fa-duotone fa-comment-lines"></i>
                            <div>Messenger</div>
                        </Link>
                    </div>
                    <div className="item__menu--task">
                        <Link to="#">
                            <i class="fa-duotone fa-user-group"></i>
                            <div>Friends</div>
                        </Link>
                    </div>
                    <div className="item__menu--task">
                        <Link to="#">
                            <i class="fa-duotone fa-people-group"></i>
                            <div>Groups</div>
                        </Link>
                    </div>
                    <div className="item__menu--task">
                        <Link to="#">
                            <i class="fa-duotone fa-floppy-disk-circle-arrow-right"></i>
                            <div>Saved</div>
                        </Link>
                    </div>
                    <div className="item__menu--task">
                        <Link to="#">
                            <i class="fa-duotone fa-rectangle-ad"></i>
                            <div>Advertisement</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewTask;