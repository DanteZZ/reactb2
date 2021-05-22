import React from 'react';

export const FullLoader = (props) => {
    let classes = "preloader";
    if (!props.hide) { classes += " hidden";};
    return (
        <div className={classes}>
            <div className="loader">
                <div className="img img-4"></div>
                <div className="img img-1"></div>
                <div className="img img-2"></div>
                <div className="img img-3"></div>
            </div>
        </div>
    );
}