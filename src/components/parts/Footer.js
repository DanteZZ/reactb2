import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import CE from '../../ce';
import logo_footer from "../../assets/images/logo_footer.png";

const Sidebar = () => {
    const [prods,setProds] = useState([]);
    const [socials,setSocials] = useState([]);
    useEffect (() => {
        CE.API.getFooterSidebar().then((response)=>{
            let d = response.data;
            setProds(d.prods);
            setSocials(d.socials);
        })
    },[]);
    return (
        <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="links-name">Продукты</div>
            <div className="prods">
                {prods.map(item => <Link key={item.id} to={"/products/"+item.id}><img src={CE.getUrl(item.min_image)} alt=""/></Link>)}
            </div>
            <div className="links-name">Мы в соц. сетях</div>
            <div className="socials">
                {socials.map(item => <a key={item.id} target="_blank" rel="noreferrer" href={item.link}><img src={CE.getUrl(item.footer_image)}  alt=""/></a>)}
            </div>
        </div>
    );
}

export const Footer = () => {
    const [services,setServices] = useState([]);
    useEffect (() => {
        CE.API.getServicesOnly().then((response)=>{
            setServices(response.data.services);
        })
    },[]);
    return (
        <footer>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <Link to="/" className="logo"><img src={logo_footer} alt=""/></Link>
                    <p>
                        B2 - цифровое агентство полного цикла. Разработка веб-приложений, сайтов и брендирование. © Все права сохранены.
                    </p>
                    <Link target="_blank" to="/policy" className="policy">Политика конфеденциальности</Link>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="links-name">Услуги</div>
                    <ul className="links">
                       {services.map((item, i) => <li key={i}><Link to={"/services/"+item.id}>{item.name}</Link></li>)}
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="links-name">Навигация</div>
                    <ul className="links">
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="/services">Услуги</Link></li>
                        <li><Link to="/portfolio">Портфолио</Link></li>
                        <li><Link to="/products">Продукты</Link></li>
                        <li><Link to="/contacts">Контакты</Link></li>
                    </ul>
                </div>
                <Sidebar/>
            </div>
        </footer>
    );
};