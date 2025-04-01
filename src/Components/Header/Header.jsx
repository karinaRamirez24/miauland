import React from 'react';
import './Header.css';

import MiaulandLogo from "../../Assets/Icons/LogoMiauland";

function Header() {
    // const { t } = useTranslation();
    // const [isMenuOpen, setMenuOpen] = useState(false);
    // const dropdownMenuRef = useRef(null);
    // const topBarRef = useRef(null);
    // const menuButtonRef = useRef(null);

    // useEffect(() => {
    //     const handleResize = () => {
    //         if (window.innerWidth >= 1252) {
    //             if (dropdownMenuRef.current)
    //                 dropdownMenuRef.current.style.display = "none";
    //             if (topBarRef.current) {
    //                 topBarRef.current.style.height = "auto";
    //                 topBarRef.current.style.background = "rgba(0, 0, 0, 0.35)";
    //             }
    //             if (menuButtonRef.current) {
    //                 menuButtonRef.current.innerHTML = `<box-icon name="menu" color="#ffffff" id="header__button--menu" style="width: 42px; height: 42px;"></box-icon>`;
    //             }
    //             setMenuOpen(false);
    //             if (document.body) {
    //                 document.body.style.overflow = "auto";
    //             }
    //         }
    //     };

    //     window.addEventListener("resize", handleResize);
    //     handleResize();
    //     return () => window.removeEventListener("resize", handleResize);
    // }, []);

    // const toggleMenuStyle = (isOpen) => {
    //     if (dropdownMenuRef.current)
    //         dropdownMenuRef.current.style.display = isOpen ? "block" : "none";
    //     if (topBarRef.current) {
    //         topBarRef.current.style.height = isOpen ? "100%" : "auto";
    //         topBarRef.current.style.background = isOpen
    //             ? "rgba(35, 35, 35)"
    //             : "rgba(0, 0, 0, 0.35)";
    //         topBarRef.current.style.animation = isOpen
    //             ? "scale-up-top 0.4s linear"
    //             : "";
    //     }
    //     if (menuButtonRef.current) {
    //         menuButtonRef.current.innerHTML = isOpen
    //             ? `<box-icon name="x" color="#ffffff" id="header_button--close--menu" style="width: 42px; height: 42px;"></box-icon>`
    //             : `<box-icon name="menu" color="#ffffff" id="header__button--menu" style="width: 42px; height: 42px;"></box-icon>`;
    //     }
    // };

    // const handleMenuToggle = () => {
    //     const isOpen = !isMenuOpen;
    //     toggleMenuStyle(isOpen);
    //     setMenuOpen(isOpen);
    //     if (document.body) {
    //         document.body.style.overflow = isOpen ? "hidden" : "auto";
    //     }
    // };

    // const closeMenu = () => {
    //     toggleMenuStyle(false);
    //     setMenuOpen(false);
    //     if (document.body) {
    //         document.body.style.overflow = "auto";
    //     }
    // };

    return (
        <header className="header">
            <div className='header__top-bar'>
                <a href=""><MiaulandLogo color = "#4E4E4E" size={50} /></a>
                <nav className="header__nav">
                    <ul className='header__nav-list'>
                        <li><a href="#adopciones">Adopciones</a></li>
                        <li><a href="#donaciones">Donaciones</a></li>
                        <li><a href="#nosotros">Nosotros</a></li>
                        <li><a href="#contactanos">Contáctanos</a></li>
                    </ul>
                    <button className="header__menu-button" style={{ display: "none" }}>
                        <box-icon className="header__icon" name="menu" color="#ffffff" style={{ width: "42px", height: "42px" }} ></box-icon>
                    </button>
                </nav>

                <div className="header__dropdown-menu" style={{ display: "none" }}>
                    <ul className="header__expanded-menu">
                        <li className="header__expanded-menu-item">
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