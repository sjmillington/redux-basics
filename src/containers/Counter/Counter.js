import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, add, subtract, storeResult, deleteResult  } from '../../store/actions/index'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {

        let results = this.props.storedResults.map(el => <li  onClick={() => this.props.onDeleteResult(el.id)} key={el.id}>{el.value}</li>)

        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={() => this.props.onAddCounter(5)}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractCounter(5)}  />
                <CounterControl label="Add 10" clicked={() => this.props.onAddCounter(10)}  />
                <CounterControl label="Subtract 10" clicked={() => this.props.onSubtractCounter(10)}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {results}
                </ul>
            </div>
        );
    }
}

const mapStatetoProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(increment()),
        onDecrementCounter: () => dispatch(decrement()),
        onAddCounter: (value) => dispatch(add(value)),
        onSubtractCounter: (value) => dispatch(subtract(value)),
        onStoreResult: (result) => dispatch(storeResult(result)),
        onDeleteResult: (resultId) => dispatch(deleteResult(resultId))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Counter);