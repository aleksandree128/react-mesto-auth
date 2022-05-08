import React from "react";
import { Link, useLocation } from "react-router-dom";
import logoHeader from "../images/header/header__logo.svg";

function Header({ userEmailOnHeader, logoutProfile }) {
    const location = useLocation();
    return (
        <header className="header">
            <a href="#" target="_blank">
                <img className="logo" src={logoHeader} alt="логотип" />
            </a>
            <div className="header__links">
                <p className="header__link header__link_email">
                    {location.pathname === "/" ? userEmailOnHeader : ""}
                </p>
                <Link
                    to={
                        location.pathname === "/sign-up"
                            ? "/sign-in"
                            : location.pathname === "/sign-in"
                                ? "/sign-up"
                                : "/sign-in"
                    }
                    className="header__link header__link_exit"
                    onClick={location.pathname === "/" ? logoutProfile : () => {}}
                >
                    {location.pathname === "/sign-up"
                        ? "Войти"
                        : location.pathname === "/sign-in"
                            ? "Регистрация"
                            : "Выйти"}
                </Link>
            </div>
        </header>
    );
}

export default Header;
