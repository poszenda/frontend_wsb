import React from 'react';

export default function Task({title, priority, done, complete }) {
    //aby móc korzystac z done- czyli jesli cos zrobione to przekresli lub nie
    const style = { textDecoration: done? 'line-through' : 'none' };
    // po kliknieciu w krzyzyk zamykajacy musimy przestawic aktualny Task(title,priority, done) na done czyli zrobuiony
    return(
     <li style={style}>{title} ({priority})
        <span onClick={() => complete({title, priority, done})}> &times;</span>
     </li>)
}