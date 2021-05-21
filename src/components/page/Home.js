import React, {Fragment} from 'react'
import {Link} from 'react-router-dom';
import TypeIt from 'typeit-react';
import {SectionServices} from '../sections/Services';
import {SectionCalculate} from '../sections/Calculate';
import {SectionPortfolio} from '../sections/Portfolio';
import {SectionPartners} from '../sections/Partners';
export const PageHome = (props) => {
    props.setTitle("Главная");
    return (
        <Fragment>
            <section className="main" data-rellax-speed="-5" data-rellax-zindex="0">
			<div className="container">
                <TypeIt className="b-text">Поднимаем<br/>бизнес на новый<br/>уровень.</TypeIt>
				<a className="more" href="#services"><i className="icon more"></i></a>
			</div>
            </section>
            <SectionServices/>
            <section className="top-services dark">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 service key">
                            <div className="color grey"></div>
                            <h2 className="title">Комплексные решения "Под ключ"</h2>
                            <div className="text">Комплексные решения для бизнеса, включающие в себя широкий спектр услуг</div>
                            <Link to="/services/38" className="btn next outline white">Подробнее</Link>
                        </div>
                        <div className="col-lg-6 col-md-12 service digital">
                            <div className="color blue"></div>
                            <h2 className="title">Digital-<br/>Услуги</h2>
                            <div className="text">Предоставление любой помощи в сфере digital</div>
                            <Link to="/services" className="btn next outline white">Подробнее</Link>
                        </div>
                    </div>
                </div>
            </section>
            <SectionPortfolio home={true} title={'Последние проекты'}/>
            <SectionCalculate/>
            <SectionPartners/>

        </Fragment>
    )
}