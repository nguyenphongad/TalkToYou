import React from 'react';
import { useState } from 'react';
import Avatar_TTY from "../../../../assets/images/photo_status_1/avatar_id-1.png";

import { AnimatePresence } from "framer-motion";
import Typical from 'react-typical';

import ModalMation from '../../../Modal/ModalMation/ModalMation';
import ContentCreateModal from './ContentCreateModal';

import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from '../../../../Errors/ErrorBoundary';
import UseKey from '../../../useKey/Usekey';

function CreateStatus() {

    const [openDropModalCreatePost, setopenDropModalCreatePost] = useState(false);
    const open = () => {
        setopenDropModalCreatePost(true);
        document.body.style.overflowY = "hidden";
    }
    const close = () => {
        setopenDropModalCreatePost(false);
        document.body.style.removeProperty('overflow');
    }
    function handlecloseModaldropInter(){
        if(openDropModalCreatePost) {
            setopenDropModalCreatePost(false);
            document.body.style.removeProperty('overflow');
        }
    }
    UseKey("Escape",handlecloseModaldropInter);

    return (
        <>
            <div className="box__status">
                <div className="body__create--status">
                    <div className="item__row-nav btn__avatar--user">
                        <div className="border__avatar--user">
                            <img src={Avatar_TTY} alt="avatar" className="img--avatar" />
                        </div>
                    </div>
                    <div className="item__row-nav create__text--think"
                        onClick={() => (openDropModalCreatePost ? close() : open())}>
                        <div className="btn__input--content" id="id_context">
                            <Typical
                                wrapper="div"
                                className="text_think_create"
                                steps={[
                                    "Talk To You, what are you thinking?", 2000,
                                ]}
                            />
                        </div>
                    </div>
                    <div className="item__row-nav btn__create--post" 
                        onClick={() => (openDropModalCreatePost ? close() : open())}>
                        <i className="fa-solid fa-plus"></i>
                        <div className="text__btn_create">Create Post</div>
                    </div>

                </div>
                <AnimatePresence
                    initial={false}
                    exitBeforeEnter={true}
                    onExitComplete={() => null}
                >
                    {openDropModalCreatePost && <ModalMation
                        modalOpen={openDropModalCreatePost}
                        handleClose={close}
                        text_header="Create a post"
                        content_modal={<ContentCreateModal />}
                    />}

                </AnimatePresence>
            </div>
            <div className="border--separation">
                <div className="border-inline"></div>
            </div>
        </>
    )

}
<ErrorComponent></ErrorComponent>

export default withErrorBoundary(CreateStatus, {
    FallbackComponent: ErrorComponent,
});