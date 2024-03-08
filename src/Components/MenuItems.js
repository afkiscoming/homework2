import React, { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCircleInfo } from '@fortawesome/free-solid-svg-icons';


const MenuItems = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);
    const ref = useRef();

    const iconMap = {
        "faHouse": faHouse,
        "faCircle": faCircleInfo,
    };

    useEffect(() => {
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);

    const onMouseEnter = () => {
        setDropdown(true);
    };

    const onMouseLeave = () => {
        setDropdown(false);
    };

    return (
        <li className="menu-items" ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>

            {items.submenu ? (
                <div style={{ whiteSpace: "nowrap" }}>
                    {items.icon ? <FontAwesomeIcon icon={iconMap[items.icon]} /> : ""}
                    <button type="button" onClick={() => setDropdown(prev => !prev)}>
                        {items.label} {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
                    </button>
                    <Dropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} />
                </div>
            ) : (
                <Link to={items.url}>
                    {items.icon ? <FontAwesomeIcon icon={iconMap[items.icon]} /> : ""}
                    {items.label}
                </Link>
            )}
        </li>
    );
};

export default MenuItems;
