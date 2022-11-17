import React from 'react';
import { useState } from 'react';
import Avatar_TTY from "../../../../assets/images/photo_status_TTY/avatar_TTY.png";

import { motion, AnimatePresence } from "framer-motion";
import Typical from 'react-typical';

import ModalMation from '../../../Modal/ModalMation/ModalMation';
import ContentCreateModal from './ContentCreateModal';

import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from '../../../../Errors/ErrorBoundary';

function CreateStatus() {

    const [modalOpen, setModalOpen] = useState(false);
    const open = () => {
        setModalOpen(true);
        document.body.style.overflowY = "hidden";
        document.body.style.paddingRight = "16px";
        document.getElementById("hu").style.paddingRight = "16px";
    }
    const close = () => {
        setModalOpen(false);
        document.body.style.removeProperty('overflow');
        document.body.style.paddingRight = "0px";
        document.getElementById("hu").style.paddingRight = "0px";
    }

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
                        onClick={() => (modalOpen ? close() : open())}>
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
                    onClick={() => (modalOpen ? close() : open())}>
                        <i class="fa-solid fa-plus"></i>
                        <div className="text__btn_create">Create&#160;Post</div>
                    </div>

                </div>
                <AnimatePresence

                    initial={false}
                    exitBeforeEnter={true}
                    onExitComplete={() => null}
                >

                    {modalOpen && <ModalMation
                        modalOpen={modalOpen}
                        handleClose={close}
                        text_header="Create a post"
                        content_modal={<ContentCreateModal />}
                    />}

                </AnimatePresence>
            </div>
            <div class="border--separation">
                <div className="border-inline"></div>
            </div>
        </>
    )

}
<ErrorComponent></ErrorComponent>

export default withErrorBoundary(CreateStatus, {
    FallbackComponent: ErrorComponent,
});