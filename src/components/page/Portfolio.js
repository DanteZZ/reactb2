import React from 'react'
import {SectionCalculate} from '../sections/Calculate';
import {SectionPortfolio} from '../sections/Portfolio';
export const PagePortfolio = (props) => {
    props.setTitle("Портфолио");
    return (
        <div className="mt-50">
            <SectionPortfolio title={'Портфолио'}/>
            <SectionCalculate/>
        </div>
    )
}