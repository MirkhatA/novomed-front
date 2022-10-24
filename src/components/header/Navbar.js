import "./NavbarStyles.scss";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";

import LogoImg from "../../assets/logo.png";

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className="header">
            <Link to="/">
                <Link to="/"><img src={LogoImg} alt=""/></Link>
            </Link>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/">Главная страница</Link>
                </li>
                <li>
                    <Link to="/about">О нас</Link>
                </li>
                <li>
                    <Link to="/companies">Фирмы</Link>
                </li>
                <li>
                    <Link to="/items">Продукция</Link>
                </li>
                <li>
                    <Link to="/contact">Контакты</Link>
                </li>
            </ul>

            <div className="hamburger" onClick={handleClick}>
                {click ?
                    (<FaTimes size={30} style={{color: "009FE3"}}/>) :
                    (<FaBars size={30} style={{color: "009FE3"}}/>)
                }


            </div>
        </div>
    )
}

export default Navbar;