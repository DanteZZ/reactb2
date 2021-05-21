import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router';
import CE from '../../ce';

export const PageCase = (props) => {
    props.setTitle("Портфолио");
    const { id } = useParams();
    const [acase,setCase] = useState(null);
    useEffect (() => {
        CE.API.getCase(id).then((response)=>{
            setCase(response.data.case);
        })
    },[id]);

    return (
        <section className="content case" id="content">
            {
            acase ? 
                <div className="container">
                    <h1 className="lined">{acase.name}</h1>
                    <div dangerouslySetInnerHTML={{ __html: acase.content }}/>
                </div>
            :   <div className="container">
                    Загрузка...
                </div>
            }
        </section>
    )
}