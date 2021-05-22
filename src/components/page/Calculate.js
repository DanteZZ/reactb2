import React from 'react';

export const PageCalculate = (props) => {
    const setTitle = props.setTitle;
    const ptypes = ["Сайт","Приложение","Дизайн","СЕО","Маркетинг","Другое"];
    setTitle("Рассчитать стоимость проекта");
    return (
        <section className="mh calculate" id="content">
            <div className="container">
                <h1 className="lined">Рассчитать стоимость проекта</h1>
                <form className="row form" method="POST" action="?send=1">
                    <div className="col-12">
                        <p>
                            Заполните форму ниже или скачайте <a href="javascript.void(0)">бриф</a>.
                        </p>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <h4>Имя</h4>
                        <input type="text" name="name" required placeholder="Как к вам обращаться?"/>

                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <h4>Контактный телефон</h4>
                        <input type="text" name="phone" required placeholder="+7 (123) 456-78-90"/>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <h4>Тип проекта</h4>
                        <select name="type" id="">
                            {ptypes.map((item,i)=><option key={i} value={item}>{item}</option>)}
                        </select>
                    </div>
                    <div className="col-12">
                        <h4>Описание проекта</h4>
                        <textarea name="description" id="" cols="30" rows="10" placeholder="Опишите вкратце о чем будет ваш проект."></textarea>
                        <button style={{fontSize:"1.1em"}} className="btn block">Отправить</button>
                        <p>Нажимая на кнопку отправить вы соглашаетесь с условиями <a target="_blank" href="/policy">Политики конфеденциальности</a>.</p>
                    </div>
                </form>

            </div>
        </section>
    )
}