import React from 'react'

function RenderMessenger() {
    return (
        <div className="wrap_drop-chat">
            <div className="body__messenger-drops">
                <div className="tr_row ">
                    <div className="heading_tr--mess">
                        Chat
                    </div>
                    <div className="btn_select--set">
                        <div className="float_item">
                            <div className="item_border_select--setMess">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <div className="item_border_select--setMess">
                                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default RenderMessenger