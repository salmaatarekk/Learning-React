
import React, { Component } from 'react';
class Counter extends Component {

    state = {
        count: 0,
        // imageUrl: 'https://picsum.photos/200'
        tags: ['tag1', 'tag2', 'tag3']
    };

    styles = {
        fontSize: 20,
        fontWeight: 'thin'
    };
    //constructor() {
    //super();
    //  this.handleIncrement = this.handleIncrement.bind(this);
    //}
    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    }

    handleDecrement = () => {
        this.setState({ count: this.state.count - 1 });
    }
    doHandleIncrement = () => {
        this.handleIncrement({id : 1});
    };

    render() {

        return (

            
            <div>
                <span style={this.styles} className={this.getBadgeClasses()} >{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>

                <button onClick={this.handleDecrement} className="btn btn-secondary btn-sm">Decrement</button>

            </div>
        );
    }



    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}



export default Counter;

// In {} i can add any valid JavaScrpit Code
// table.table>thead>tr>th * 4