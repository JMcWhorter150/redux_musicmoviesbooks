// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import { createStore, combineReducers } from 'redux';

// global action types

// basic states

const bookState = [{
    title: "The Road",
    author: "Cormac McCarthy",
    pageCount: 300
}]

const musicState = [{
    title: "Brother",
    artist: "Murder by Death",
    songLength: 190
}
];

const movieState = [{
    title: 'The Green Mile',
    yearReleased: '1997',
    genre: 'Drama'
}]

// reducers

// combine reducers

// create store

// add debugging and console logging to store

// add dispatches