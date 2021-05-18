import React, {useState, useEffect} from 'react';
import logo from "../../../assets/images/logo.png";
import logo_nonback from "../../../assets/images/logo.png";
import CE from '../../../ce';

const NavServiceList = (props) => {
    return (<div className="subnav">
        <div className="row">
            {
                props.services.map((item,i)=>{
                    return (<div key={item.id} className="col-3">
                        <div className="links-name">{item.name}</div>
                        <ul className="links">
                            {
                                item.services.map((sitem,si)=>{
                                    return (<li key={si} className=""><a href="/services/24/57">{sitem.name}</a></li>)
                                })
                            }
                        </ul>
                    </div>)
                })
            }
        </div>
    </div>)
}

const NavProductList = (props) => {
    console.log(props.prods);
    return (
        <div className="subnav full">
            <div className="row prods">
                {
                    props.prods.map((item,i)=>{
                        return <div 
                                key={item.id} 
                                className="col-6 prod"
                                style={{backgroundImage:"url("+CE.getUrl(item.back_image)+")"}}
                            >
                            <div className="dark"></div>
                            <img src={CE.getUrl(item.image)} alt="" className="logo"/>
                            <div className="description">
                                <b>{item.name}</b> -{item.description}	</div>
                            <a href="/products/19">Подробнее</a>
                        </div>
                    })
                }				
            </div>
        </div>
    )
}

export const Navigation = () => {
    const hClass="top";
    const [services, setServices] = useState([]);
    const [prods,setProds] = useState([]);
    useEffect (() => {
        CE.API.getMenu().then((response)=>{
            setServices(response.data.cats);
            setProds(response.data.prods);
        })
    },[])
    
    return (
            <header className={hClass}>
                <a href="/">
                    <img src={logo} alt="" className="logo-img"/>
                    <img src={logo_nonback} alt="" className="logo-img-nonback"/>
                </a>
                <ul className="nav">
                    <li className="item active"><a href="/">Главная</a></li>
                    <li className="item">
                        <a href="/services">Услуги</a>
                        { (services.length>0) ? <NavServiceList services={services} /> : '' }
                    </li>
                    <li className="item"><a href="/portfolio">Портфолио</a></li>
                    <li className="item">
                        <a href="/products">Продукты</a>
                        { (prods.length>0) ? <NavProductList prods={prods} /> : '' }
                    </li>
                    <li className="item"><a href="/contacts">Контакты</a></li>
                    <li className="item"><a href="/account">Личный кабинет</a></li>
                </ul>
                <i className="icon mobile_nav"></i>
            </header>
    );
}