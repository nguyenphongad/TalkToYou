import React, { useEffect, useRef } from 'react'
import Avatar_TTY from '../../../../assets/images/photo_status_1/avatar_id-1.png';
import RenderTippy from '../../../Tippy/RenderTippy';

function ContentCreateModal() {

    const searchInput = useRef(null);

    useEffect(() => {
        searchInput.current.focus()
    }, []);

    const listSelectCreatePost = [
        {
            classIcon: "fa-regular fa-file-invoice",
            textBtn: "Add a document",
            colorIcon : "#484444"
        },
        {
            classIcon: "fa-regular fa-folder-image",
            textBtn: "Add a photo",
            colorIcon : "#313188"
        },
        {
            classIcon: "fa-solid fa-camcorder",
            textBtn: "Add a video",
            colorIcon :"#984646"
        },
        {
            classIcon: "fa-solid fa-face-smile",
            textBtn: "Add a emotion",
            colorIcon : "#7d713d"
        },
        {
            classIcon: "fa-solid fa-location-dot",
            textBtn: "Add a location",
            colorIcon : "#8e55a3"
        },
        {
            classIcon: "fa-solid fa-calendar",
            textBtn: "Add a event",
            colorIcon : "#458145"
        },
    ]
    const listRenderSeclectCreatePost = listSelectCreatePost.map((index) => {
        const colorIcon = index.colorIcon;
        return (
            <RenderTippy contentTippy={index.textBtn} key={index}>
                <div className="border__select-createPost" >
                    <i className={index.classIcon} style={{color: colorIcon}}></i>
                </div>
            </RenderTippy>
        )
    })
    return (
        <div className="box__create--status">
            <div className="container__create--dropdown-status">
                <div className="box__first--content">
                    <div className="flex__information__user">
                        <div className=" avatar_user">
                            <div className="align_item_center">
                                <div className="border__img--avatar-user">
                                    <img src={Avatar_TTY} alt="logo-Talk-To-You"/>
                                </div>
                            </div>
                        </div>
                        <div className="name_user">
                            <div className="item__column_option name__user--cr">
                                <span>Talk To You</span>
                            </div>
                            <div className="item__column_option share__change-button">
                                <div className="btn__change--share">
                                    <i class="fa-solid fa-earth-americas"></i>
                                    <span>Public</span>
                                    <i class="fa-solid fa-caret-right"></i>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div className="editor__content--status">
                        <div>
                            <textarea placeholder="What do you think?" ref={searchInput} />
                        </div>
                    </div>
                </div>
                <div className="text_warning">
                    <span>
                        You can't post at this time !
                    </span>
                </div>
                <div className="box__second--select-option">
                    <div className="item_flex-row box_select_column--btn">
                        {listRenderSeclectCreatePost}
                    </div>
                    <div className="item_flex-row box__btn-artdeco">
                        <button className="artdeco-button artdeco-button-disable">Post</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContentCreateModal;