import React, {Component} from 'react';

//chcemy do form przekazać narzedzie z Task planner czyli addTask
export default class TaskForm extends Component {

        // musimy byc pewni stanu formularza dlatego robimy construktor, stan to wartosć pola input i select
    constructor (props) {
        super(props);
        // to domyslne wartości, od tego zaznaczamy
        //ustawiamy pole pierwszego stanu
        this.initialState = { input: "", select: 1};
        this.state = this.initialState;
        /* aby this nie straciło swojego kontekstu dajemy bind */
        this.getInput = this.getInput.bind(this);
        this.getSelect = this.getSelect.bind(this);
        this.submit = this.submit.bind(this);
    }

    //te trzy metody sa potrzebne do obslugiwania formularza
    getInput(event) {
        this.setState({ input: event.target.value});
    }
    getSelect(event) {
        this.setState({ select: event.target.value});
    }
    //metoda ktora tworzy nowy task na podstawie formularza i przekazuje go do metody this.props.addTask
    submit() {
            //zeby nie mozna bylo dodawac pustych tasków: robimy if, sprawdzamy warunek czy input nie jest pusty
        if(this.state.input !== ""){
            //po kliknieciu wywolujemy metode addtask
            this.props.addTask(
                { title: this.state.input, 
                priority: this.state.select,
                done: false }
            );
            // wyczyszczenie formularza i ustawienie opriorytetu na 1
            this.setState(this.initialState);
        }
    }
    // wyczyszczenie formularza



    render(){
        return (
            //budujemy formularz
            <form>
                 {/* cjcemy aby kontrolki oddziaływały na nasze zminy, np wpisanie, dajemy event onchange- metoda która "wywałwia" wartosc inputa     */}
                {/* kontrolka dla tytułu i dla priorytetu       */}
                {/* value - ustawiamy wskazaną wartosć w inpucie, czyli ustawi na poczatku poczatkowy stan */}
              

                <input type = 'text' value={this.state.input} onChange={this.getInput} />
                <select value={this.state.select} onChange={this.getSelect}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>
                {/* po nacisnieciu guzika musimy zebrac stan i wywiołać funkcje addTask  - robimy to kolejna metoda "submit*/}
                <button type='button' onClick={this.submit}>Dodaj zadanie</button>
            </form>
        );
    }
} 
// nie dajemy typu submit dla formularza bo nie chcemy zeby poza strone cos wysyłał
