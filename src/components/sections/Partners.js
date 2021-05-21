import React, {useState, useEffect} from 'react';
import CE from '../../ce';


export const SectionPartners = () => {

    const [partners,setPartners] = useState([]);
    useEffect (() => {
        CE.API.getPartners().then((response)=>{
            setPartners(response.data.partners);
        })
    },[]);

    return (
        <section className="clients">
            <div className="big-text">Наши партнёры</div>
            <div className="list">
                { partners.map(item => <a href={item.link} key={item.id} className="client"><img src={CE.getUrl(item.image)} alt={item.name}/></a>)}
            </div>
        </section>
    );
};