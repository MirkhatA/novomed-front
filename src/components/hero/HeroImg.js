import "./HeroImgStyles.scss";

import React from "react";

import IntroImg from "../../assets/main-page-background.png";
import {Link} from "react-router-dom";

const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img" src={IntroImg} alt=""/>
            </div>

            <div className="content">
                <h1>Добро пожаловать в <br/> Novomed</h1>
                <p>Мы приглашаем вас начать успешное сотрудничество с <br/> Novomed</p>

                <div>
                    <Link to="/items" className="btn">
                        подробнее
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImg;