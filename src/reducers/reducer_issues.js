import { FETCH_POST, FETCH_ISSUES } from '../actions/index';

const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
	console.log('action', action)
	switch(action.type) {
		case FETCH_ISSUES:
			return { ...state, all: action.payload.data };
		case FETCH_POST:
			return { ...state, post: action.payload.data };
		default:
			return state;
	}
	
}