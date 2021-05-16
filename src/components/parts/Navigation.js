import React from 'react';

export const Navigation = () => {
    const hClass="top";
    const logos = {
        simple:import("../../assets/images/logo.png"),
        nonback:import("../../assets/images/logo_nonback.png")
    };
    return (
        <header className={hClass}>
            <a href="/">
                <img src={logos.simple} alt="" className="logo-img"/>
                <img src={logos.nonback} alt="" className="logo-img-nonback"/>
            </a>
            <ul className="nav">
                <li className="item active"><a href="/">Главная</a></li>
                <li className="item">
                    <a href="/services">Услуги</a>
                    <div className="subnav">
                        <div className="row">
                            {/*
                            <?
                                foreach ($cats as $key=>$cat) {
                                    $TMPL->loadElement("parts/header/menu/item",null,$cat);
                                };
                            ?>
                            */}
                        </div>
                    </div>
                </li>
                <li className="item"><a href="/portfolio">Портфолио</a></li>
                <li className="item">
                    <a href="/products">Продукты</a>
                    <div className="subnav full">
                        <div className="row prods">
                            {/*
                            <?
                                foreach ($prods as $key=>$prod) {
                                    $TMPL->loadElement("parts/header/menu/product",null,$prod);
                                };
                            ?>
                            */}
                        </div>
                    </div>

                </li>
                <li className="item"><a href="/contacts">Контакты</a></li>
                <li className="item"><a href="/account">Личный кабинет</a></li>
            </ul>
            <i className="icon mobile_nav"></i>
        </header>
    );
}