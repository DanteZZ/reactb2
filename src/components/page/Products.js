import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import CE from '../../ce';

const Product = (props) => {
    const item = props.item;
    return (
        <div className="product row">
        <div className="image col-lg-4 col-md-12" style={{backgroundImage: `url(${CE.getUrl(item.back_image)}`}}>
            <div className="dark"></div>
            <img src={CE.getUrl(item.image)} alt="" className="logo"/>
        </div>
        <div className="text col-lg-8 col-md-12">
            <p>
                <b>{item.name}</b> - {item.description}
            </p>
            <Link to={"/product/"+item.id} className="category">Подробнее</Link>
        </div>
        </div>
    );
}

export const PageProducts = (props) => {
    const [prods,setProds] = useState([]);
    const setTitle = props.setTitle;

    setTitle("Продукты");

    useEffect (() => {
        CE.API.getProducts().then((response)=>{
            setProds(response.data.products);
        })
        window.scrollTo(0, 0);
    },[]);

    return (
        <section className="mh product-list" id="content">
            <div className="container">
                <h1 className="lined">Продукты</h1>				
                <div className="list">
                    {prods.map(prod => <Product key={prod.id} item={prod}/>)}
                </div>
            </div>
        </section>
    )
}