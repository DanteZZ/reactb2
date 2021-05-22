import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router';
import CE from '../../ce';

export const PageContacts = (props) => {
    const { id } = useParams();
    const [socs,setSocs] = useState([]);
    const [address,setAddress] = useState("...");
    
    const [name,setName] = useState("");
    const [message,setMessage] = useState("");
    const [phone,setPhone] = useState("");

    const [isResult,setResult] = useState(false);

    const setTitle = props.setTitle;

    const formSubmit = (e) => {
        e.preventDefault();
        CE.API.sendQuestion().then((response)=>{
            if (response.data.result) {
                setResult(true);
            } else {
                alert("Непредвиденная ошибка при отправке");
            }
        });
    }

    useEffect (() => {
        CE.API.getContacts().then((response)=>{
            setSocs(response.data.socials);
            setAddress(response.data.address);
            window.scrollTo(0, 0);
        });
        
    },[id,setTitle]);

    setTitle("Контакты");


    return (
        <section className="mh contacts">
            <div className="container">
                <h1 className="lined">Контакты</h1>
                <div className="row">
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        
                        <h3>Офис</h3>
                        <span>{address}</span>
                        
                        <h3>Телефон</h3>
                        <span>+7 (923) 506-55-33</span>
                        <h3>Соц. сети</h3>
                        <div className="socials">
                            {socs.map(soc=><a key={soc.id} href={soc.link} target="_blank" rel="noreferrer"><img src={CE.getUrl(soc.image)} alt=""/></a>)}
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <h3>Способы связи</h3>
                        <ul className="mails">
                            <li>
                                <span>По общим вопросам</span>
                                <a href="mailto:info@b2lab.ru">info@b2lab.ru</a>
                            </li>
                            <li>
                                <span>Для комментариев, прессы</span>
                                <a href="mailto:pr@b2lab.ru">pr@b2lab.ru</a>
                            </li>
                            <li>
                                <span>Сотрудничество</span>
                                <a href="mailto:reception@b2lab.ru">reception@b2lab.ru</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-12 col-xl-4 col-sm-12">
                        <h3>Обратная связь</h3>

                            { !isResult ? 
                            <form onSubmit={formSubmit} className="form">
                                <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} required placeholder="Как к вам обращаться?"/>
                                <textarea name="message" rows="4" value={message} onChange={(e)=>{setMessage(e.target.value)}} required placeholder="Что вас интересует?"></textarea>
                                <input type="text" name="phone" value={phone} onChange={(e)=>{setPhone(e.target.value)}} required placeholder="Телефон для связи"/>
                                <button className="btn block">Отправить</button>
                                <p>Нажимая на кнопку отправить вы соглашаетесь с условиями <a target="_blank" href="/policy">Политики конфеденциальности</a>.</p>
                            </form>
                                : ""
                            }
                            { isResult ? 
                                <div className="success">
                                    <img src={CE.getUrl("/assets/images/success.png")} alt=""/>
                                    <p>Ваша заявка отправлена, скоро с вами свяжется специалист.</p>
                                </div> 
                            : ""}
                        
                    </div>		
                </div>
            </div>
        </section>
    )
}