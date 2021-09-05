import React, { Component } from 'react';
import Counters from './components/counters';
import NavBar from './components/navbar';
import {Route} from 'react-router-dom'

// the commented code realted to counter application
class App extends Component {
  
  state = {
    Products : "",
    Posts : "",
    Dashboard : "",
    Home : ""
    // counters: [
    //     {id: 1, value: 4},
    //     {id: 2, value: 0},
    //     {id: 3, value: 0},
    //     {id: 4, value: 0}
        
    // ]
};
// handleDelete = counterId => {
//     console.log('Deleting...', counterId);
//     const counters = this.state.counters.filter(c => c.id != counterId);
//     this.setState({counters});

// };
// handleReset = () => {
//     const counters = this.state.counters.map(c => {
//         c.value = 0;
//         return c;
//     });
//     this.setState({counters});

// };
// handleIncrement = (counter) =>{
//     const counters = [...this.state.counters];
//     const idx = counters.indexOf(counter);
//     counters[idx] = {...counter};
//     counters[idx].value++;
//     this.setState({counters});

// };
// handleDecrement = (counter) =>{
//     const counters = [...this.state.counters];
//     const idx = counters.indexOf(counter);
//     counters[idx] = {...counter};
//     counters[idx].value--;
//     this.setState({counters});

// };

  render() { 

    const {Products, Posts, Dashboard, Home } = this.state;
   
    return (
      // <React.Fragment>
      // <NavBar totalCounters = {this.state.counters.filter(c => c.value > 0).length} />
      // <main className = "container">
      //   <Counters
      //   counters = {this.state.counters}
      //   onReset = {this.handleReset}
      //   onIncrement = {this.handleIncrement}
      //   onDecrement = {this.handleDecrement}
      //   onDelete = {this.handleDelete}
      //   />
      // </main>
      // </React.Fragment>
      <div>
        <NavBar />
        <div className = "content">
        <Route path = "/products" component={Products} />
        <Route path = "/posts" component={Posts} />
        <Route path = "/admin" component={Dashboard} />
        <Route path = "/" component={Home} />
        </div>
      </div>

      );
  }
}
 
export default App;
