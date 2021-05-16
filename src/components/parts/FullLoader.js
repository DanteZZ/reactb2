import React from 'react';

export const FullLoader = (props) => {
    console.log(props);
    if (!props.hide) {
        return (
            <div className="preloader">
                <div className="loader">
                    <div className="img img-4"></div>
                    <div className="img img-1"></div>
                    <div className="img img-2"></div>
                    <div className="img img-3"></div>
                </div>
            </div>
        );
    } else {
        return null
    }
}