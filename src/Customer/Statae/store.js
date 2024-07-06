import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import {thunk} from 'redux-thunk'; // Correct import

// Define your reducers here
const rootReducers = combineReducers({
  // your reducers
});

export const store = createStore(rootReducers, applyMiddleware(thunk));
