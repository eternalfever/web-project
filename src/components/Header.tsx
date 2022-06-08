import React from "react";
import logo from "../../src/img/logo.png"


export default function Header() {
    return (
        <header className="header">
        <a className="header__logo" href="#">
            <img src={logo} alt="logo" />
        </a>
        <ul className="header__navigation">
            <li>
                <a className="header__item" href="#intro">Tranding activity</a>
            </li>
            <li>
                <a className="header__item" href="#artists">Top marketplaces</a>
            </li>
            <li>
                <a className="header__item" href="#faq">Learn more</a>
            </li>
        </ul>
    </header>
    )
}