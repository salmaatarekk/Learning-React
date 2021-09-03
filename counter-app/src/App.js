import React, { Component } from 'react';
import Counters from './components/counters';
import NavBar from './components/navbar';

class App extends Component {
  
  state = {
    counters: [
        {id: 1, value: 4},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0}
        
    ]
};
handleDelete = counterId => {
    console.log('Deleting...', counterId);
    const counters = this.state.counters.filter(c => c.id != counterId);
    this.setState({counters});

};
handleReset = () => {
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    });
    this.setState({counters});

};
handleIncrement = (counter) =>{
    const counters = [...this.state.counters];
    const idx = counters.indexOf(counter);
    counters[idx] = {...counter};
    counters[idx].value++;
    this.setState({counters});

};
handleDecrement = (counter) =>{
    const counters = [...this.state.counters];
    const idx = counters.indexOf(counter);
    counters[idx] = {...counter};
    counters[idx].value--;
    this.setState({counters});

}

  render() { 
    return (
      <React.Fragment>
      <NavBar />
      <main className = "container">
        <Counters
        counters = {this.state.counters}
        onReset = {this.handleReset}
        onIncrement = {this.handleIncrement}
        onDecrement = {this.handleDecrement}
        onDelete = {this.handleDelete}
        />
      </main>
      </React.Fragment>

      );
  }
}
 
export default App;
