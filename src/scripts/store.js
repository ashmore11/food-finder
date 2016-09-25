import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reduxReactFirebase, firebaseStateReducer } from 'redux-react-firebase';
import thunk from 'redux-thunk';

import count from 'reducers/count';

const rootReducer = combineReducers({
  firebase: firebaseStateReducer,
  count,
});

const firebaseConfig = {
  apiKey: 'AIzaSyBkDy3SuMO91LNwwvD4n830KkiwOoWqBy0',
  authDomain: 'food-finder-1892f.firebaseapp.com',
  databaseURL: 'https://food-finder-1892f.firebaseio.com',
  storageBucket: 'food-finder-1892f.appspot.com',
  messagingSenderId: '449599039126',
};

const initialState = {};

const createStoreWithFirebase = compose(
  reduxReactFirebase(firebaseConfig),
)(createStore);

const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
