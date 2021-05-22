import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
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
                                    return (<li key={si} className=""><Link to={"/service/"+sitem.id}>{sitem.name}</Link></li>)
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
                            <Link to={"/product/"+item.id}>Подробнее</Link>
                        </div>
                    })
                }				
            </div>
        </div>
    )
}

export const Navigation = (props) => {
    const hClass="top";
    const setShowMobile = props.setShowMobile;
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
                <Link to="/">
                    <img src={logo} alt="" className="logo-img"/>
                    <img src={logo_nonback} alt="" className="logo-img-nonback"/>
                </Link>
                <ul className="nav">
                    <li className="item active"><Link to="/">Главная</Link></li>
                    <li className="item">
                        <Link to="/servicecats">Услуги</Link>
                        { (services.length>0) ? <NavServiceList services={services} /> : '' }
                    </li>
                    <li className="item"><Link to="/portfolio">Портфолио</Link></li>
                    <li className="item">
                        <Link to="/products">Продукты</Link>
                        { (prods.length>0) ? <NavProductList prods={prods} /> : '' }
                    </li>
                    <li className="item"><Link to="/contacts">Контакты</Link></li>
                </ul>
                <i className="icon mobile_nav" onClick={()=>{setShowMobile(true)}}></i>
            </header>
    );
}