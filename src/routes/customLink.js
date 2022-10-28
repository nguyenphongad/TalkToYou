import { useMatch, useResolvedPath, NavLink  } from 'react-router-dom';

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <div className="menu__column--nav">
            <div className="item_header--item">
                <NavLink to={to} {...props} >
                    {children}
                </NavLink>
            </div>
            <div className={isActive ? "navigation_item--menu active_navigation " : ""}></div>
        </div>
    )
}
export default CustomLink;