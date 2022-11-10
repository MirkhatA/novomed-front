import './HomeServicesStyles.scss';

import React from "react";

import HospitalIcon from "../../assets/icons/hospital-service-icon.png";
import GovIcon from "../../assets/icons/gov-service-icon.png";
import CrowdIcon from "../../assets/icons/crowd-service-icon.png";


const HomeServices = () => {
    return (
        <div className="services">
            <div className="service">
                <div className="icon">
                    <img src={HospitalIcon} alt="hospital-icon"/>
                </div>
                <p>
                    Компания NOVOMEDKZ была основана в Нидерландах в 2013 году. Основатели нашей компании на протяжении
                    многих лет поставляли медицинское оборудование и технологии в Центральной Азии, такие как Казахстан,
                    Таджикистан, Узбекистан и Кыргызстан.
                </p>
            </div>

            <div className="service">
                <div className="icon">
                    <img src={GovIcon} alt="gov-icon"/>
                </div>
                <p>
                    У нас есть успешный опыт проведения тендеров, финансируемых KFW, IDB, OPEC, Фондом Агахана и
                    Всемирным банком. Основное предприятие нашей компании находится в Роттердаме. За последние два года
                    мы также создали ООО «NOVOMEDKZ» в Нур-Султане.
                </p>
            </div>

            <div className="service">
                <div className="icon">
                    <img src={CrowdIcon} alt="crowd-icon"/>
                </div>
                <p>
                    Благодаря продуктивным усилиям наших опытных и высококвалифицированных сотрудников, а также
                    постоянно расширяющейся клиентской базе и растущему числу наших поставщиков, c каждым годом качество
                    и ассортимент предоставляемых услуг увеличивается
                </p>
            </div>
        </div>
    );
}

export default HomeServices;