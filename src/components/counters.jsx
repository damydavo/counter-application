import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    render() { 
          const { onReset, counters, onIncrement, onDelete, onDecrement } = this.props;
        return (
    <div>
        <button onClick = { onReset } className="btn-primary bt-sm m-2">Reset</button>
        { counters.map(counter => 
        < Counter key={counter.id}
          value = { counter.value }
          id= { counter.id }
          onIncrement = { onIncrement }
          onDecrement = { onDecrement }
          onDelete = { onDelete }
          counter = {  counter}
      
        />
        
        ) }
    </div>
   )
    }
}
 
export default Counters;