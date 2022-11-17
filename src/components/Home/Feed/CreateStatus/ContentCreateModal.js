import React, { useEffect, useRef } from 'react'
import Avatar_TTY from '../../../../assets/images/photo_status_TTY/avatar_TTY.png';

function ContentCreateModal() {

    const searchInput = useRef(null);

    useEffect(() => {
        searchInput.current.focus()
    }, []);

    return (
        <div className="box__create--status">
            <div className="container__create--dropdown-status">
                <div className="item__flex--create--status box__first--content">
                    <div className="item__flex__create-status flex__information__user">
                        <div className=" avatar_user">
                            <div className="align_item_center">
                                <div className="border__img--avatar-user">
                                    <img src={Avatar_TTY} />
                                </div>
                            </div>

                        </div>
                        <div className="name_user">
                            <div className="item__column_option name__user--cr">
                                <span>Nguyễn Đình Thiên</span>
                            </div>
                            <div className="item__column_option share__change-button">
                                <div className="btn__change--share">
                                    <i class="fa-solid fa-earth-americas"></i>
                                    <span>Công khai</span>
                                    <i class="fa-solid fa-caret-right"></i>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div className="item__flex__create-status editor__content--status">
                        <div>
                            <textarea placeholder="What do you think?"
                                ref={searchInput} />
                        </div>
                    </div>
                </div>
                <div className="item__flex--create--status box__second--select-option">
                    <div className="box_select_column--btn">
                        <div>
                            <i class="fa-regular fa-folder-image"></i>
                        </div>
                        <div>
                            <i class="fa-solid fa-camcorder"></i>
                        </div>
                        <div>
                            <i class="fa-solid fa-face-smile"></i>
                        </div>
                        <div>
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <div>
                            <i class="fa-duotone fa-graduation-cap"></i>
                        </div>
                        <div>
                            <i class="fa-solid fa-list-music"></i>
                        </div>
                        <div>
                            <i class="fa-solid fa-calendar"></i>
                        </div>
                    </div>

                </div>
            </div>
            <div className="text_warning">
                <span>
                    Chưa thể đăng bài viết trong lúc này
                </span>
            </div>
            <button className="artdeco-button" >Đăng</button>

        </div>
    )
}

export default ContentCreateModal;