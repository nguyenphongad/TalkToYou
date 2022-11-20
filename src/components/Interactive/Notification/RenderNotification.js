import React from 'react'

function RenderNotification() {
    return (
        <div className="wrap_drop-noti">
            <div className="body__noti-drops">
                <div className="tr_row ">
                    <div className="heading_tr--chat">
                        Notification
                    </div>
                    <div className="btn_select--set">
                        <div className="float_item">
                            <div className="item_border_select--setChat">
                                <i class="fa-regular fa-check-double"></i>
                            </div>
                            <div className="item_border_select--setChat">
                                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="body_list_user-noti">
                    ???
                </div>

            </div>
        </div>
    )
}

export default RenderNotification