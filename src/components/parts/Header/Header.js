import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from './Navigation';

export const Header = () => {
    const links = [
        {link:"/",title:"Главная"},
        {link:"/servicecats",title:"Услуги"},
        {link:"/portfolio",title:"Портфолио"},
        {link:"/products",title:"Продукты"},
        {link:"/contacts",title:"Контакты"},
    ];
    return (
        <Fragment>
            <nav hidden id="mobile_nav">
                <i className="icon close"></i>
                <ul>
                    {links.map((item,i) => <li key={i} className="item"><Link to={item.link}>{item.title}</Link></li>)}
                </ul>
            </nav>
            <Navigation/>
        </Fragment>
    );
}