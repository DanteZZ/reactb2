import React from 'react';
import {Link} from 'react-router-dom';

export const SectionCalculate = () => {
    return (
        <section className="buy">
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