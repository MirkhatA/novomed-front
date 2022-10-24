import "./FooterStyles.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="companies">
                    <h1>ФИРМЫ</h1>

                    <ul>
                        <li>Hamilton MEDICAL</li>
                        <li>LOWENSTEIN MEDICAL</li>
                        <li>BIOLIGHT</li>
                        <li>SEOIL PACIFIC CORP.</li>
                        <li>BILIMETRIX</li>
                        <li>MEDIN</li>
                        <li>RVENT</li>
                    </ul>
                </div>
                <div className="items">
                    <h1>ПРОДУКЦИЯ</h1>

                    <ul>
                        <li>Анестезиологическая рабочий станций</li>
                        <li>Модульные мониторы пациента</li>
                        <li>Откашливатели</li>
                        <li>Аппараты искусственной вентиляции легких</li>
                        <li>Аппараты для СИПАП-терапии</li>
                        <li>Диагностика сна</li>
                        <li>Aнализатор билирубина</li>
                        <li>Расходники</li>
                    </ul>
                </div>
                <div className="contacts">
                    <h1>Контакты</h1>

                    <ul>
                        <li>kz@novomed.nl</li>
                        <li>+7 7172 97-83-98</li>
                        <li>www.novomed.nl</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;