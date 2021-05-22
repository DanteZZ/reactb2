import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from './Navigation';

export const Header = () => {
    const [showMobile,setShowMobile] = useState(false);
    const links = [
        {link:"/",title:"Главная"},
        {link:"/servicecats",title:"Услуги"},
        {link:"/portfolio",title:"Портфолио"},
        {link:"/products",title:"Продукты"},
        {link:"/contacts",title:"Контакты"},
    ];
    return (
        <Fragment>
            <nav hidden id="mobile_nav" className={showMobile ? "show" : ""}>
                <i className="icon close" onClick={()=>{setShowMobile(false)}}></i>
                <ul>
                    {links.map((item,i) => <li key={i} onClick={()=>{setShowMobile(false)}} className="item"><Link to={item.link}>{item.title}</Link></li>)}
                </ul>
            </nav>
            <Navigation setShowMobile={setShowMobile}/>
        </Fragment>
    );
}