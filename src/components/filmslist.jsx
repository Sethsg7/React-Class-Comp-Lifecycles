import { Component } from "react";

class FilmList extends Component {
    constructor(props) {
     super(props) 
            
     this.state = {
       list: [], 
      };
    }

     getFilms() {
        fetch("https://studioghibliapi-d6fc8.web.app/films")//Fetch is always fetch->response->JSON->set->catch?
        .then((response) => response.json())
        .then((films) => this.setState({ list: films})) //Replaces the old array.
        .catch((error) => console.error(error));
     }

     componentDidMount() {  //ComponentDidMount only runs once. Can be placed before or after render.
        this.getFilms()     //ComponentDidUpdate runs every time.
     }                      //This entire component is a class and code must run inside of methods.

    render() {
        return <ul>
            {this.state.list.map((film) => {
                return <li key={film.id}>{film.title}</li> //Keys are necessary for Reeact to keep up with map.
            })}
        </ul>;
    }
}

export default FilmList;