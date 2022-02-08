import React from 'react';
const todoTitle = "call family";
const todoSpace = "Dummy text";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentyear = date.getYear();


function Card () {
    return <div className = 'card'>
    <h3 className='cardTitle'>{todoTitle}</h3>
    <p className= 'cardDesc'>{todoSpace}</p>
    <p className = 'cardFooter'>{dateName + "/" + monthName + "/" + currentyear}</p>
    </div>

}

export default Card;

