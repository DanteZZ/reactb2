import React, {useState, useEffect} from 'react';
import CE from '../../../ce';

export const ComputePay = () => {
    return (
        <section class="buy">
            <div class="container">
                <a href="/calculate">
                    <span class="red"></span>
                    Рассчитать стоимость проекта 
                    <i class="icon buy-arrow"></i></a>
            </div>
        </section>
    );
};