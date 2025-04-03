import './Header.css';
import React from 'react';
import { useRef, useState, useEffect } from "react";
import MiaulandLogo from "../../Assets/Icons/Miauland";

function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const dropdownMenuRef = useRef(null);
    const topBarRefParent = useRef(null);
    const topBarRef = useRef(null);
    const menuButtonRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1025) {
                if (dropdownMenuRef.current)
                    dropdownMenuRef.current.style.display = "none";
                if (topBarRef.current) {
                    topBarRef.current.style.height = "auto";
                    // topBarRef.current.style.background = "rgba(0, 0, 0, 0.35)";
                }
                if (menuButtonRef.current) {
                    menuButtonRef.current.innerHTML = `<box-icon name="menu" color="#575756" id="header__button--menu" style="width: 42px; height: 42px;"></box-icon>`;
                }
                setMenuOpen(false);
                if (document.body) {
                    document.body.style.overflow = "auto";
                }
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMenuStyle = (isOpen) => {
        if (dropdownMenuRef.current)
            dropdownMenuRef.current.style.display = isOpen ? "block" : "none";
        if (topBarRef.current) {
            topBarRef.current.style.height = isOpen ? "100%" : "auto";
            // topBarRef.current.style.background = isOpen
            //     ? "rgba(35, 35, 35)"
            //     : "rgba(0, 0, 0, 0.35)";

            topBarRefParent.current.style.background = isOpen
                ? "rgba(222, 222, 222, 0.47)"
                : "rgba(222, 222, 222, 0.0)";
            // topBarRef.current.style.animation = isOpen
            //     ? "scale-up-top 0.4s linear"
            //     : "";
        }
        if (menuButtonRef.current) {
            menuButtonRef.current.innerHTML = isOpen
                ? `<box-icon name="x" color="#575756" id="header_button--close--menu" style="width: 42px; height: 42px;"></box-icon>`
                : `<box-icon name="menu" color="#575756" id="header__button--menu" style="width: 42px; height: 42px;"></box-icon>`;
        }
    };

    const handleMenuToggle = () => {
        const isOpen = !isMenuOpen;
        toggleMenuStyle(isOpen);
        setMenuOpen(isOpen);
        if (document.body) {
            document.body.style.overflow = isOpen ? "hidden" : "auto";
        }
    };

    const closeMenu = () => {
        toggleMenuStyle(false);
        setMenuOpen(false);
        if (document.body) {
            document.body.style.overflow = "auto";
        }
    };

    return (
        <header className="header" ref={topBarRefParent}>
            <div className='header__top-bar' ref={topBarRef}>
                <div className='header__logo-container'>
                    <a href="#" onClick={closeMenu}><MiaulandLogo className='header__logo' /></a>
                </div>
                <nav className="header__nav">
                    <ul className='header__nav-list'>
                        <li><a href="#adopciones">Adopciones</a></li>
                        <li><a href="#donaciones">Donaciones</a></li>
                        <li><a href="#nosotros">Nosotros</a></li>
                        <li><a href="#contactanos">Contáctanos</a></li>
                    </ul>
                    <button className="header__menu-button" onClick={handleMenuToggle} ref={menuButtonRef}>
                        <box-icon className="header__icon" name="menu" color="#575756" style={{ width: "42px", height: "42px" }} ></box-icon>
                    </button>
                </nav>

                <div className="header__dropdown-menu" ref={dropdownMenuRef} id="dropdownMenu" style={{ display: "none" }}>
                    <ul className="header__expanded-menu">
                        <li className="header__expanded-menu-item">
                            <box-icon name="baidu" color="#575756" style={{ width: "42px", height: "42px" }} ></box-icon>
                            <a href="#adopciones">Adopciones</a>
                        </li>
                        <li className="header__expanded-menu-item">
                            <a href="#donaciones">Donaciones</a>
                        </li>
                        <li className="header__expanded-menu-item">
                            <a href="#nosotros">Nosotros</a>
                        </li>
                        <li className="header__expanded-menu-item">
                            <a href="#contactanos">Contáctanos</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
export default Header;