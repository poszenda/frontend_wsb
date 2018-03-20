import React, { Component } from 'react'
// importujemy komponent task list aby z niego skorzystac:  sciezka na koncu do pliku js nie musi posiadac tego rozszerznia bo react to wie
import TaskList from '../TaskList/TaskList';
//importujemy taskform
import TaskForm from '../TaskForm/TaskForm';
import TaskSorter from '../TaskSorter/TaskSorter';

export default class TaskPlanner extends Component {
    // inicjalizujemy sobie jakiś stan
    constructor() {
        super();
        this.state = {
            // tablica tasków
            //jes li chcemy nie dodawac zadnych taskow na poczatku, predefiniowanych to musimy zdefiniować myTasks: myTasks[]
            myTasks: [
                { title: 'Kup mydlo', priority: 2, done: false },
                { title: 'Kup amciu', priority: 3, done: false },
                { title: 'Kup piciu', priority: 2, done: false },
                { title: 'Kup kwiatuszek', priority: 1, done: false },
                { title: 'Napisz email do Jakuba', priority: 2, done: false },
            ]
        }
        this.addTask = this.addTask.bind(this);
        this.complete = this.complete.bind(this);
        this.sortByTitle = this.sortByTitle.bind(this);
        this.sortByPriority = this.sortByPriority.bind(this);
    }

    // dołączanie kolejnych tasków do naszej tablicy - nowego zadania
    //w klasie jesteśmy wiec nie musi być słowa kluczowego function
    //przekazujemy do tej metody nowy task
    addTask(newTask) {
        // ponieważ state jest obiektem musimy wsprawadzic cały obiekt task
        //musimy zwrócić listę poprzednią wraz z nowynm elementem - metoda concat
        //concat newTask jest w nawiasach bo chcemy z obiektu newTask zrobić w celu concat tablice- bo concat dziala na tablicach
        this.setState({ myTasks: this.state.myTasks.concat([newTask]) });
    }

    //tworzymy metode ktora przyjmuje pojedynczy tesk i ustawia na nim dane na true - konczy go, bindujemy te metode
    complete(task) {
        // musimy odfiltrowac tego taska ktory bedzie mial ustawiony done: true - zmieniony na zakonczony
        //po odfiltrowaniu usyskamy tak długa tablice jak wiele jest pasujacych elementow
        //filtrujemy bo cchemy taski ktore nie sa tym, ktore wlasnie zakonczyliscmy
        //a jesli dodamy pole id na kazdym tasku to ulatwimy sobie sortowanie
        const bezZakonczonegoTaska = this.state.myTasks.filter((val) => {
            return val.title !== task.title;
        });
        task.done = true;
        const nowaListaTask = bezZakonczonegoTaska.concat([task]);
        this.setState({ myTasks: nowaListaTask });

    }

    sortByTitle() {
        // funkcja sortujaca mialaby problem posortowac po tytule bo tytuil jest czescia obiektu, trzeba napisac funkcje ktora wskaze tej funkcji sortujacej co ma skad posortowac
        //musimy do małych liter wszystkie tytuły przerobić bo duze litery mają inne kody niż mały...
        const alfabetycznie = (a, b) => {
            // porównanie 2 sasiednich pozycji i przesuniecie potem jesli sa zle ulozone wzgledem siebie
            const tytulA = a.title.toLowerCase();
            const tytulB = b.title.toLowerCase();

            if (tytulA < tytulB) return -1;
            else if (tytulA > tytulB) return 1;
            return 0;
        };
        // wywołujemy sortowanie na naszej liscie
        this.state.myTasks.sort(alfabetycznie);
        this.setState(this.state.myTasks);
    }

    sortByPriority() {

    }

    render() {
        return ( < section > { /* piszemy komponent który moze wywołąć metode dodania addTask */ } { /* przekazujemy samą funkcje do taskform pod postacia tego propsa*/ } <
            TaskForm addTask = { this.addTask }
            />  <
            TaskSorter sortByTitle = { this.sortByTitle }
            sortByPriority = { this.sortByPriority }
            /> <
            TaskList tasks = { this.state.myTasks }
            complete = { this.complete }
            /> { } </section > /* Task który pokazuje tytuł i priorytet */
        )
    }

}