import React, {useState, useEffect, Fragment} from 'react';
import {Link} from 'react-router-dom';
import CE from '../../ce';
const Case = (props) => {
    const item = props.item;
    return (
        <Link to={"/portfolio/"+item.id} className="project" style={{width:props.size,height:props.size}}>
            <div className="wrapper" style={{backgroundImage:`url(${CE.getUrl(item.image)})`}}>
                <div className="dark"></div>
                <div className="name">{item.name}</div>
                <span className="description">{item.description}</span>
            </div>
        </Link>
    );
}

const ItemTag = (props) => {
    return (
        <ul className="tags">
            {
                props.items.map((item,i)=>{
                    return <li 
                        key={item.id} 
                        onClick={()=>{
                            props.setTag(item.tag);
                        }} 
                        className={(item.tag === props.tag) ? 'active' : ''}>
                            {item.name}
                        </li>
                })
            }
        </ul>
    );
}

export const SectionPortfolio = (props) => {
    const [cases,setCases] = useState([]);
    const [tags,setTags] = useState([]);
    const [title,setTitle] = useState("");
    const [selTag,setSelTag] = useState("*");
    const [caseSize,setCaseSize] = useState(0);
    const ishome = props.home;
    const setTag = (tag = "*") => {
        setSelTag(tag);
    }

    const getCases = () => {
        return cases.filter((item)=>{
            if (selTag === "*") {
                return true;
            } else {
                if (item.tags.includes(selTag)) {return true};
            }
            return false;
        });
    };

    const updateProjectWH = () => {
        let list = document.getElementById("portfolio-list");
        let s = 0;
        if (list.clientWidth < 991.98) {
            s = list.clientWidth;
        } else {
            s = list.clientWidth/2
        };
        setCaseSize(s);
    };

    useEffect (() => {
        let count = false;
        if (ishome) {count = 4;};
        CE.API.getPortfolio(count).then((response)=>{
            response.data.tags.unshift({id:0,tag:"*",name:"Все"});
            setCases(response.data.cases);
            setTags(response.data.tags);
            setTitle(response.data.title);
        });
        window.addEventListener('resize', updateProjectWH)
        updateProjectWH();
        return () => {
            window.removeEventListener('resize', updateProjectWH)
        };
    },[ishome])



    return (
        <Fragment>
            <section className="portfolio">
                <div className="container">
                    <h2>{props.title ? props.title: title}</h2>
                    {!props.home ? <ItemTag items={tags} setTag={setTag} tag={selTag} /> : <br></br> }
                </div>
            </section>
            <section className="projects">
                <div className="list" id="portfolio-list">
                    { getCases().map(item=><Case key={item.id} item={item} size={caseSize}/>)}
                </div>
                {props.home ? <div className="more">
                    <Link to="/portfolio">Все проекты<i className="icon all-projects"></i></Link>
                    
                </div> : false }
            </section>
        </Fragment>
    );
};