import React from "react";
import "./App.css";

//Extend allows new class to inherit.
class App extends React.Component {
  constructor(props) {
    super(props); //Super calls an inherited constructor.
    this.state = { //Using state in this way is for Class components, not Functional.
      //This is the initialized state, not intended to remain.
      list: ["ready", "set", "GO"],
      text: "",
    };

    this.onSubmit = this.onSubmit.bind(this);
  }


  onSubmit(event) { //Submit events need prevent default.
    event.preventDefault();

    let newList = [...this.state.list, this.state.text];
    this.setState({list: newList, text:""}); //Setstate updates the state. Will always cause a rerender.
  }



  render() {
    return (
      //Parenthese allow you to stretch a return statement.
      //This div is required because React/JS can only return 1 element.
      //You can wrap things in an empty element in order to return multiple things.
      <div> 
        <h1>Hello World!</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            id="text"
            value={this.state.text}
            onChange={(event) => this.setState({ text: event.target.value })}
          />
          <button type="submit">Add</button>
        </form>

        <ul>
          {this.state.list.map((item, idx) => {
            return <li key={item + idx}> {item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
//Exportd this app to be used elsewhere.