import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { NavLink} from 'react-router-dom';

function CustomLink() {
    const element = useRef();

    const listMenuHeader = [
        {
            to: "/",
            ref: element,
            styleDisplay: true
        },
        {
            to: "/feed",
            nameMenuHeader: "Home",
            iconMenuHeader: "fa-light fa-house-chimney",
            indexMenu: true
        },
        {
            to: "/watching",
            nameMenuHeader: "Watching",
            iconMenuHeader: "fa-light fa-clapperboard-play",
        },
        {
            to: "/music",
            nameMenuHeader: "Music",
            iconMenuHeader: "fa-light fa-folder-music",
        },
        {
            to: "/marketplace",
            nameMenuHeader: "Marketplace",
            iconMenuHeader: "fa-light fa-cart-shopping-fast",
        },
        {
            to: "/typay",
            nameMenuHeader: "TY pay",
            iconMenuHeader: "fa-light fa-credit-card",
        },
    ]
    const [isActiveHome, setIsActiveHome] = useState(false);
    useEffect(() => {
        if (element.current?.classList.value === "active") setIsActiveHome(true);
        else setIsActiveHome(false);
    }, [element.current?.classList.value]);

    const navLinkMenuHome = (e) => { return e.isActive || isActiveHome ? "active" : "" }
    const navLinkMenu = (e) => { return e.isActive ? "active" : "" }
    const handelClickChangemenu = () => { setIsActiveHome(false) }
    const navLinkMenuNavigationHome = (e) =>{
        return e.isActive || isActiveHome ? "navigation_item--menu active_navigation " : "navigation_item--menu";
    }
    const navLinkMenuNavigation = (e) =>{
        return e.isActive ? "navigation_item--menu active_navigation " : "navigation_item--menu";
    }

    const listMenuHeaderMap = listMenuHeader.map((index) => {
        return (
            <div className={`menu__column--nav ${index.styleDisplay ? "display-none" : ""}`} key={index.to}>
                <div className="item_header--item">
                    <NavLink
                        to={index.to}
                        key={index.to}
                        onClick={index.indexMenu ? undefined : handelClickChangemenu}
                        className={index.indexMenu ? navLinkMenuHome : navLinkMenu}
                        ref={index.ref}
                    >   
                        <i className={index.iconMenuHeader}></i>
                        <div className="item__text--status"> {index.nameMenuHeader}</div>
                    </NavLink>
                </div>
                <NavLink
                    to={index.to}
                    className={index.indexMenu ? navLinkMenuNavigationHome : navLinkMenuNavigation}
                >
                </NavLink>
            </div>
        )
    })
    return (
        <>
            {listMenuHeaderMap}
        </>
    )
}
export default CustomLink;