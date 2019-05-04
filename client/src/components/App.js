import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      gatos: []
    }
  }
  async componentDidMount(){
     const resp = await axios.get('/api/gatos');
     this.setState({
       gatos: resp.data
     });
  }

  desplegarGatos = () => (
     this.state.gatos.map((gato) => (
      <li>
        {gato.name}
      </li>
     ))
  );

  render(){
    return (
      <div>
        <h3>Lista de gatos:</h3>
        <ul>
        { this.desplegarGatos() }
        </ul>
      </div>
    );
  }
}

export default App;
