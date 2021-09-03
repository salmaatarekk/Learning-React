import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
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

    };
    

    render() {
        return (
            <div>
                <button onClick = {this.handleReset} className="btn bnt-primary btn-sm m-2">Reset</button>
               {this.state.counters.map(counter => 
               <Counter
                key = {counter.id}
                onDelete = {this.handleDelete}
                onIncrement = {this.handleIncrement}
                onDecrement = {this.handleDecrement}
                counter = {counter}
                >
                   <h4>
                       Counter# {counter.id}
                   </h4>
               </Counter>  ) }
            </div>

        );
    }
}
export default Counters;
