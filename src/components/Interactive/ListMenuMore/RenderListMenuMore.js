import React from 'react'

function RenderListMenuMore() {
    return (
        <div className="wrap_drop-menuMore">
            <div className="body_drop--menuMore">
                <div className="heading_menuMore">
                    Menu
                </div>
                <div className="container__btn--menuMore">
                    <div class="item__btn--menuMore">
                        <i class="fa-solid fa-pen-to-square"></i>
                        <div className="text_heading-btn">Create new message</div>
                    </div>
                    <div class="item__btn--menuMore">
                        <i class="fa-solid fa-user-group"></i>
                        <div className="text_heading-btn">Friends</div>
                    </div>
                    <div class="item__btn--menuMore">
                        <i class="fa-solid fa-people-group"></i>
                        <div className="text_heading-btn">Groups</div>
                    </div>
                    <div class="item__btn--menuMore">
                        <i class="fa-solid fa-calendar"></i>
                        <div className="text_heading-btn">Events</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RenderListMenuMore;