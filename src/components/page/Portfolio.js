import React, {useEffect} from 'react'
import {SectionCalculate} from '../sections/Calculate';
import {SectionPortfolio} from '../sections/Portfolio';
export const PagePortfolio = (props) => {
    useEffect(()=>{window.scrollTo(0, 0);},[]);
    props.setTitle("Портфолио");
    return (
        <div className="mt-50">
            <SectionPortfolio title={'Портфолио'}/>
            <SectionCalculate/>
        </div>
    )
}