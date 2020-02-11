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

const ADD_BOOK = "ADD_BOOK";
const ADD_MUSIC = "ADD_MUSIC";
const ADD_MOVIE = "ADD_MOVIE";
const REM_BOOK = "REM_BOOK";
const REM_MUSIC = "REM_MUSIC";
const REM_MOVIE = "REM_MOVIE";
const UPDATE_BOOK = "UPDATE_BOOK";
const UPDATE_MUSIC = "UPDATE_MUSIC";
const UPDATE_MOVIE = "UPDATE_MOVIE";

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

function bookManager(state=bookState, action) {
    newState = [...state];

    switch (action.type) {
        case ADD_BOOK:
            newState.push(action.payload);
            break;
        case REM_BOOK:
            newState.splice(action.id, 1);
            break;
        case UPDATE_BOOK:
            newState[action.id] = action.payload;
        default:
            break;
    }

    return newState;
}

function musicManager(state=musicState, action) {
    newState = [...state];

    switch (action.type) {
        case ADD_MUSIC:
            newState.push(action.payload);
            break;
        case REM_MUSIC:
            newState.splice(action.id, 1);
            break;
        case UPDATE_MUSIC:
            newState[action.id] = action.payload;
        default:
            break;
    }

    return newState;
}

function bookManager(state=movieState, action) {
    newState = [...state];

    switch (action.type) {
        case ADD_MOVIE:
            newState.push(action.payload);
            break;
        case REM_MOVIE:
            newState.splice(action.id, 1);
            break;
        case UPDATE_MOVIE:
            newState[action.id] = action.payload;
        default:
            break;
    }
    return newState;
}

// combine reducers

// create store

// add debugging and console logging to store

// add dispatches