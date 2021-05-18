import React from 'react';
import CE from '../../../ce';
export const SectionServices = () => {
    return (
    <section className="services">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 d-lg-block">
                    <img src={CE.getUrl("/addict/template/assets/images/mac.png")} alt="" className="mac"/>
                </div>
                <div className="col-lg-8 col-md-12">
                    <h2>Чем мы <br/>занимаемся</h2>
                    <div className="row">
                        <div className="col-md-6 service">
    <div className="title">
    <i className="icon develop"></i>
    <h3>Разработка</h3>
    </div>
    <div className="text">
    Разработка сайтов, настройка админ-панели, перенос сайтов на CMS, подключение CRM систем и не только.	</div>
    </div><div className="col-md-6 service">
    <div className="title">
    <i className="icon design"></i>
    <h3>Дизайн</h3>
    </div>
    <div className="text">
    Дизайн логотипов, сайтов, визиток. Разработка брендбука, маркетинг-кита и презентаций.	</div>
    </div><div className="col-md-6 service">
    <div className="title">
    <i className="icon bussines"></i>
    <h3>Бизнес-приложения</h3>
    </div>
    <div className="text">
    Разработка приложений для бизнеса, автоматизация бизнес-процессов и внедрение в организацию.	</div>
    </div><div className="col-md-6 service">
    <div className="title">
    <i className="icon marketing"></i>
    <h3>Маркетинг</h3>
    </div>
    <div className="text">
    Анализ ниши, SEO-оптимизация, реклама Yandex.Директ, Google AdSense и ведение соц. сетей.	</div>
    </div><div className="col-md-6 service">
    <div className="title">
    <i className="icon light"></i>
    <h3>Комплексные решения</h3>
    </div>
    <div className="text">
    Готовый сайт для вашего бизнеса	</div>
    </div>						</div>
                </div>
            </div>
        </div>
    </section>
    );
};