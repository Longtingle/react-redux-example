This example shows the basic setup and use patterns for react with redux.

Store is CREATED in the index.js using the createStore method provided by react-redux
When you create a store, you initialise it with a reducer.
The reducer is the function that accepts the current state and an action (a json package containing a type and some optional payload) and returns what the new state should be in an immutable way.

The reducer function is stored in a reducer.js file in the store folder.

The reducer is ran for the first time during setup at which time the state needs to be initialised with a default state, also specified in the reducer file.

Each component that needs to dispatch actions or access the state (which should be limited in the same way as when using react state) needs to be CONNECTed to the store.

When connecting the component to the store 2 additional functions are passed to it to map the segments of the state and the actions needed by the component to component properties.