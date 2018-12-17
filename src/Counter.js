import React, { Component } from 'react';
import {connect} from 'react-redux';
import {increment, decrement, undo, redo} from './ducks/counter';

class Counter extends Component {
	render() {
		console.log(this.props)
		return (
			<div className="app">
			<section className="counter">
				<h1 className="counter__current-value">{this.props.value}</h1>
				<div className="counter__button-wrapper">
				<button
					className="counter__button increment-five"
					onClick={() => this.props.increment(5)}
				>
					+5
				</button>
				<button
					className="counter__button increment-one"
					onClick={() => this.props.increment(1)}
				>
					+1
				</button>
				<button
					className="counter__button decrement-one"
					onClick={() => this.props.decrement(1)}
				>
					-1
				</button>
				<button
					className="counter__button decrement-five"
					onClick={() => this.props.decrement(5)}
				>
					-5
				</button>
				<br />
				<button
					className="counter__button undo"
					onClick={() => this.props.undo()}
				>
					Undo
				</button>
				<button
					className="counter__button redo"
					onClick={() => this.props.redo()}
				>
					Redo
				</button>
				</div>
			</section>
			<section className="state">
				<pre>{JSON.stringify(this.props, null, 2)}</pre>
			</section>
			</div>
		);
	}
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {increment, decrement, undo, redo})(Counter);
