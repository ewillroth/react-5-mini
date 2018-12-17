const initialState = {
	value: 0,
	prevValue: [0],
	undone: [0],
}

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const UNDO = 'UNDO';
const REDO = 'REDO';

export const increment = (num) => {
	return {
		type: INCREMENT,
		payload: num
	}
}
export const decrement = (num) => {
	return  {
		type: DECREMENT,
		payload: num
	}
}
export const undo = (action) => {
	return {
		type: UNDO,
		payload: action
	}
}
export const redo = (action) => {
	return {
		type: REDO,
		payload: action
	}
}

export default function reducer(state=initialState, action){
	switch(action.type){
		case INCREMENT:
		return {
				value: state.value + action.payload,
				prevValue: [...state.prevValue, state.value],
				undone: [...state.undone]
		}
		case DECREMENT:
			return {
				value: state.value - action.payload,
				prevValue: [...state.prevValue, state.value],
				undone: [...state.undone]
		}
		case UNDO:
				return {
					value: state.prevValue[state.prevValue.length-1],
					prevValue: state.prevValue.length>1?state.prevValue.slice(0, state.prevValue.length - 1): [...state.prevValue],
					undone: state.prevValue.length>1?[...state.undone, state.value]: [...state.undone]
		}

		case REDO:
			return {
				value: state.undone.length>1?state.undone[state.undone.length-1]:state.value,
				prevValue: state.undone.length>1?[...state.prevValue, state.value]:[...state.prevValue],
				undone: state.undone.length>1?state.undone.splice(0, state.undone.length -1) : [...state.undone]
				
		}
		default:
			return state
	}
}