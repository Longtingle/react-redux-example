import update from 'immutability-helper';
import actions from './actions.js';

const initialState = {
    prop1 : "prop1",
    prop2 : 2,
    prop3 : {
        prop4 : "prop4",
        prop5 : 5
    }
}

const reducer = (state = initialState, action) => {
    var newState;
    console.log ("Reduer triggered: " + action.type);
    if (action.type === actions.ACTION_TYPE_ONE) {
        newState = update(state, {prop1: {$set : "New property!"}});
        return newState;
    }
    if (action.type === actions.ACTION_TYPE_TWO) {
        newState = update (state, {
            prop1 : {$set : "Changed again!"}, 
            prop3 : {
                prop4 : {$set : "This changed too!"}
        }});
        return newState;
    }
    return state;
}

export default reducer;