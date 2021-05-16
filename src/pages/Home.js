import React, {Fragment} from 'react'
import TypeIt from 'typeit-react';
export const Home = () => {
    return (
        <Fragment>
            <section className="main" data-rellax-speed="-5" data-rellax-zindex="0">
			<div className="container">
                <TypeIt className="b-text">Поднимаем<br/>бизнес на новый<br/>уровень.</TypeIt>
				<a className="more" href="#services"><i className="icon more"></i></a>
			</div>
            </section>
            {/*<? $TMPL->loadElement("sections/services"); ?>*/}
            <section className="top-services dark">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 service key">
                            <div className="color grey"></div>
                            <h2 className="title">Комплексные решения "Под ключ"</h2>
                            <div className="text">Комплексные решения для бизнеса, включающие в себя широкий спектр услуг</div>
                            <a href="/services/38" className="btn next outline white">Подробнее</a>
                        </div>
                        <div className="col-lg-6 col-md-12 service digital">
                            <div className="color blue"></div>
                            <h2 className="title">Digital-<br/>Услуги</h2>
                            <div className="text">Предоставление любой помощи в сфере digital</div>
                            <a href="/services" className="btn next outline white">Подробнее</a>
                        </div>
                    </div>
                </div>
            </section>
            {
                /*
                <? $TMPL->loadElement("sections/portfolio","home"); ?>
                <? $TMPL->loadElement("sections/calculate"); ?>
                <? $TMPL->loadElement("sections/partners"); ?>
                */
            }

        </Fragment>
    )
}