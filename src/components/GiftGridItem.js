import React from 'react'
import '../index.css';
export const GiftGridItem = ({id, title, url}) => {
    return (
        <div className="card animate__animated animate__bounceInDown">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}


