import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import CE from '../../ce';

const Service = (props) => {
    const item = props.item;
    let classes = "col-xl-3 col-md-6 col-sm-6 col-xs-6 service";
    if (parseInt(item.is_hot)) {classes +=" mark";};
    return (
        <div className={classes}>
            <Link to={"/service/"+item.id} className="wrapper">
                <img src={CE.getUrl(item.image)} alt=""/>
                <span>{item.name} <i className="icon service-next"></i></span>
            </Link>
        </div>
        
    );
}

export const PageServiceCat = (props) => {
    const { id } = useParams();
    const [services,setServices] = useState([]);
    const [info,setInfo] = useState({name:"..."});
    const setTitle = props.setTitle;

    setTitle("Услуги");

    useEffect (() => {
        CE.API.getServices(id).then((response)=>{
            setServices(response.data.services);
            setInfo(response.data.cat);
            setTitle(response.data.cat.name);
        })
        window.scrollTo(0, 0);
    },[id,setTitle]);

    return (
        <section className="mh service-list" id="content">
            <div className="container">
                <h1 className="lined">{info.name}</h1>				
                <div className="row">
                    {services.map(service => <Service key={service.id} item={service}/>)}
                </div>
            </div>
        </section>
    )
}