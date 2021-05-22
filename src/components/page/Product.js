import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router';
import CE from '../../ce';
import { Fragment } from 'react';


export const PageProduct = (props) => {
    const { id } = useParams();
    const [prod,setProd] = useState(null);
    const setTitle = props.setTitle;

    useEffect (() => {
        CE.API.getProduct(id).then((response)=>{
            setProd(response.data.product);
            setTitle(response.data.product.name);
        })
        window.scrollTo(0, 0);
    },[id,setTitle]);
    if (prod) {
        return (
            <Fragment>
                <section className="main video" data-rellax-speed="-5" data-rellax-zindex="0">
                    <video autoPlay muted loop>
                        <source src={CE.getUrl(prod.video)} type="video/mp4"/>
                    </video>
                    <div className="dark"></div>
                    
                    <div className="container">
                        <a href="#content">
                        <img src={CE.getUrl(prod.vector_logo)} alt="" className="logo"/>
                            {parseInt(prod.blinked) ? <img src={CE.getUrl("/assets/images/blink_line.svg")} alt="" className="logo blink"/> : ''}
                        </a>
                        <div className="desc">
                            <b>{prod.name}</b> - {prod.description}
                        </div>
                        <a className="more" href="#content"><i className="icon more"></i></a>
                    </div>
                </section>
                <div className="left-offset" dangerouslySetInnerHTML={{ __html: prod.content }}/>
            </Fragment>
        )
    } else {
        return null;
    }
    
}