import React, {useState, useEffect} from 'react';
import CE from '../../ce';

const Service = (props) => {
    const info = props.info;
    return (
        <div className="col-md-6 service">
            <div className="title">
            <i className={"icon "+info.icon}></i>
            <h3>{info.name}</h3>
            </div>

            <div className="text">
                {info.description}
            </div>
        </div>
    );
}

export const SectionServices = () => {

    const [services,setServices] = useState([]);
    useEffect (() => {
        CE.API.getServicesOnly().then((response)=>{
            setServices(response.data.services);
        })
    },[])

    return (
        <section className="services" id="services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 d-lg-block">
                        <img src={CE.getUrl("/addict/template/assets/images/mac.png")} alt="" className="mac"/>
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <h2>Чем мы <br/>занимаемся</h2>
                        <div className="row">
                            {
                                services.length ?
                                    services.map((item)=>{
                                        return(<Service key={item.id} info={item}/>)
                                    })
                                    
                                : ''
                            }
                            	
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};