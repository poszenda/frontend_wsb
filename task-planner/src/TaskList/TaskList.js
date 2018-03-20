import React, { Component} from 'react';
// import komponenta task
import Task from '../Task/Task'

//równie dobrze TaskList moze być zwykla funkcja a nie klasa bo to glupi komponent
export default class TaskList extends Component {
   // task bedzie przekazywany do Tasklist
    render() {
        // tworztymy liste tasków  {title: 'abc', priority: 3}
        // skracamy ścieżkę do tasków
        const tasks = this.props.tasks;
        // t to nazwa zmiennej roboczej
        //key index - informuje React jakiektory komponent odswieżyć w razie czego, znajdujemy go po jego kluczu
        // key , title, priority, done to propsy i przekazujemy do taska
        //do complete musi byc this.props bo nei ma w tasku pola completei ona jest w klasie
        const toTask = (t, index) => <Task key={index} title={t.title} priority={t.priority} done={t.done} complete={this.props.complete} />;
        return (
            <ul>
                { tasks.map(toTask) }
            </ul> 
        );
    }

}