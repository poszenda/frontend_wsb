import React from 'react';


export default function TaskSorter(props) {
       return(
        <section>
            <button type="button" onClick={props.sortByTitle}>posortuj alfabetycznie</button>
            <button type="button" onClick={props.sortByPriority}>posortuj po priorytetach</button>
        </section>
       )
}