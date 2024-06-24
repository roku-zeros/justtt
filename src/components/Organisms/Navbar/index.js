import React, { useState } from "react";

import styles from "./index.module.scss";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import Logo from "../../Quarks/Logo";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuToggler = () => setMenuOpen((p) => !p);

    return (
        <div className={styles.header}>
            <div className={styles.header__content}>
                <div>
                    <Logo />
                </div>
                <div>
                    <nav className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}>
                        <a className={styles.nav__item} href={"/"}>
                            Вдохновение
                        </a>
                        <a className={styles.nav__item} href={"/"}>
                            Дизайн
                        </a>
                        <a className={styles.nav__item} href={"/"}>
                            Код
                        </a>
                        <div className={styles.nav__button__container}>
                            <span></span>
                        </div>
                    </nav>
                </div>
                <div>
                    <div className={styles.header__button__container}>
                        <span>Предложить статью</span>
                    </div>
                    <button className={styles.header__toggler} onClick={menuToggler}>
                        {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
                    </button>
                </div>
            </div>
        </div>
    );
};


export default Navbar;