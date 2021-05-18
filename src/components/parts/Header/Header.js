import React, { Fragment } from 'react';
import { Navigation } from './Navigation';

export const Header = () => {
    return (
        <Fragment>
            <nav hidden id="mobile_nav">
                <i className="icon close"></i>
                <ul>
                    <li className="item active"><a href="/">Главная</a></li>
                    <li className="item"><a href="/services">Услуги</a></li>
                    <li className="item"><a href="/portfolio">Портфолио</a></li>
                    <li className="item"><a href="/products">Продукты</a></li>
                    <li className="item"><a href="/contacts">Контакты</a></li>
                    <li className="item"><a href="/account">Личный кабинет</a></li>
                </ul>
            </nav>
            <Navigation/>
        </Fragment>
    );
}