import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { SectionCalculate } from "../sections/Calculate";
import CE from '../../ce';
import { Fragment } from 'react';


export const PageService = (props) => {
    const { id } = useParams();
    const [service,setService] = useState({});
    const setTitle = props.setTitle;

    useEffect (() => {
        CE.API.getService(id).then((response)=>{
            setService(response.data.service);
            setTitle(response.data.service.name);
        })
        window.scrollTo(0, 0);
    },[id,setTitle]);

    return (
        <Fragment>
            <section className="mh service-content" id="content">
                <div className="container">
                    <div className="head">
                        <img src={CE.getUrl(service.image)} alt="" className="logo"/>
                        <h1 className="lined">{service.name}</h1>
                    </div>
                    <div className="price">
                        от<br/>
                        <div className="digit">{service.price} <b>руб</b></div>
                    </div>
                    <div className="left-offset" dangerouslySetInnerHTML={{ __html: service.content }}/>
                </div>
            </section>
            <SectionCalculate light={true}/>
        </Fragment>
    )
}