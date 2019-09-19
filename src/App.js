import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const endpoint = 'https://raw.githubusercontent.com/Adalab/m3-evaluacion-intermedia-oneeyedman/componentbranch/pokemons.json';

    fetch(endpoint)
      .then(res => res.json())
      .then(results => {
        this.setState({
          data: results
        })
      });
  }

  render() {
    return (
      <div className="App">
        <ul className="pokemon-list">
          {this.state.data.map((item, index) => {
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
