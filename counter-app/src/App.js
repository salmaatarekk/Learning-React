import React, { Component } from 'react';
import Movies from './components/movies';
import Counters from './components/counters';
import NavBar from './components/navbar';
import {Route, Redirect, Switch} from 'react-router-dom'
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm';
import Register from './components/register';

// the commented code realted to counter application
class App extends Component {
  
  state = {
    
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

    //const {Products, Posts, Dashboard, Home } = this.state;
   
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
      <React.Fragment>
       <NavBar /> 

      <main className = "container" >
        <Switch>
        <Route path="/register" component={Register} />  
        <Route path="/login" component={LoginForm} />  
        <Route path="/movies/new" component={MovieForm} /> 
        <Route path="/movies" component={Movies}></Route>
        <Route path="/customers" component={Customers}></Route>
        <Route path="/rentals" component={Rentals}></Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Redirect from='/' exact to='/movies' />
        <Redirect to='/not-found'/>
        </Switch>
      </main>
      </React.Fragment>
     

      );
  }
}
 
export default App;
