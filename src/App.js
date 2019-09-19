import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    this.getUserInput = this.getUserInput.bind(this);
  }

  componentDidMount() {
    const endpoint = 'https://raw.githubusercontent.com/Adalab/m3-evaluacion-intermedia-oneeyedman/componentbranch/pokemons.json';

    fetch(endpoint)
      .then(res => res.json())
      .then(results => {
        this.setState({
          data: results,
          input: ''
        })
      });
  }

  getUserInput(event) {
    const value = event.currentTarget.value;

    this.setState({
      input: value
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="app__title">Listado de pokemons</h1>
        <p className="text">Filtra a tus pokemons preferidos</p>
        <input type="text" className="field" onChange={this.getUserInput}/>
        <ul className="pokemon-list">
          {this.state.data
            .filter(item => item.name.toUpperCase().includes(this.state.input.toUpperCase()))
            .map((item, index) => {
            return (
              <li className="pokemons-card" key={index}>
                <div className="pokemon-name">{item.name}</div>
                <img src={item.url} alt={item.name} className="pokemon-img"/>
                <ul className="pokemons-type">
                  {item.types.map((type, index) => {
                    return (
                      <li className="pokemon-type" key={index}>{type}</li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
