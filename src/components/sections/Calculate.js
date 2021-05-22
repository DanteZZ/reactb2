import React from 'react';
import {Link} from 'react-router-dom';

export const SectionCalculate = (props) => {
    let classes = "buy";
    if (props.light) {classes +=" light"}
    return (
        <section className={classes}>
            <div className="container">
                <Link to="/calculate">
                    <span className="red"></span>
                    Рассчитать стоимость проекта 
                    <i className="icon buy-arrow"></i>
                </Link>
            </div>
        </section>
    );
};