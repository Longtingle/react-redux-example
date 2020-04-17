const initialState = {
    prop1 : "prop1",
    prop2 : 2,
    prop3 : {
        prop4 : "prop4",
        prop5 : 5
    }
}

const reducer = (state = initialState, action) => {
    if (action.type === "ACTION_TYPE") {
        return {
            prop1 : "CHANGED PROP"
        }
    }
    return state;
}

export default reducer;