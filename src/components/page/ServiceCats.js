import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import CE from '../../ce';

const Cat = (props) => {
    const item = props.item;
    return (
        <Link to={"/servicecat/"+item.id} className="col-lg-6 col-md-12 category">
            <div className="wrapper">	
                <img src={CE.getUrl(item.image)} alt=""/>
                <div className="dark"></div>
                <h3 className="lined white">{item.name}</h3>
                <span className="description">{item.description}</span>
            </div>
        </Link>
    );
}

export const PageServiceCats = (props) => {
    const [cats,setCats] = useState([]);
    const setTitle = props.setTitle;

    setTitle("Услуги по категориям");

    useEffect (() => {
        CE.API.getServiceCats().then((response)=>{
            setCats(response.data.services);
        })
        window.scrollTo(0, 0);
    },[]);

    

    return (
        <section className="mh service-cats" id="content">
            <div className="container">
                <h1 className="lined">Категории услуг</h1>				
                <div className="row">
                    {cats.map(cat => <Cat key={cat.id} item={cat}/>)}
                </div>
            </div>
        </section>
    )
}