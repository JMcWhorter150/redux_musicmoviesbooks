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

// action helpers

function addBook(title, author, pageCount){
    return {
        type: ADD_BOOK,
        payload: {
            title,
            author,
            pageCount
        }
    }
}

function addMusic(title, artist, trackCount ){
    return {
        type: ADD_MUSIC,
        payload: {
            title,
            artist,
            trackCount
        }
    }
}

function addMovie(title, yearReleased, genre){
    return {
        type: ADD_MOVIE,
        payload: {
            title,
            yearReleased,
            genre
        }
    }
}

function removeBook(id) {
    return {
        type: REM_BOOK,
        id
    }
}

function removeMusic(id) {
    return {
        type: REM_MUSIC,
        id
    }
}

function removeMovie(id) {
    return {
        type: REM_MOVIE,
        id
    }
}

function updateBook(id, title, author, pageCount) {
    return {
        type: UPDATE_BOOK,
        id,
        payload: {
            title,
            author,
            pageCount
        }
    }
}

function updateMusic(id, title, author, pageCount) {
    return {
        type: UPDATE_MUSIC,
        id,
        payload: {
            title,
            author,
            pageCount
        }
    }
}

function updateMovie(id, title, yearReleased, genre) {
    return {
        type: UPDATE_MOVIE,
        id,
        payload: {
            title,
            yearReleased,
            genre
        }
    }
}

// basic states

const bookState = [{
    title: "The Road",
    author: "Cormac McCarthy",
    pageCount: 300
}]

const musicState = [{
    title: "Red of Tooth and Claw",
    artist: "Murder by Death",
    trackCount: 12
}
];

const movieState = [{
    title: 'The Green Mile',
    yearReleased: '1997',
    genre: 'Drama'
}]

// reducers

function bookManager(state=bookState, action) {
    const newState = [...state];

    switch (action.type) {
        case ADD_BOOK:
            newState.push(action.payload);
            break;
        case REM_BOOK:
            newState.splice(action.id, 1);
            break;
        case UPDATE_BOOK:
            newState[action.id] = action.payload;
            break;
        default:
            break;
    }

    return newState;
}

function musicManager(state=musicState, action) {
    const newState = [...state];

    switch (action.type) {
        case ADD_MUSIC:
            newState.push(action.payload);
            break;
        case REM_MUSIC:
            newState.splice(action.id, 1);
            break;
        case UPDATE_MUSIC:
            newState[action.id] = action.payload;
            break;
        default:
            break;
    }

    return newState;
}

function movieManager(state=movieState, action) {
    const newState = [...state];

    switch (action.type) {
        case ADD_MOVIE:
            newState.push(action.payload);
            break;
        case REM_MOVIE:
            newState.splice(action.id, 1);
            break;
        case UPDATE_MOVIE:
            newState[action.id] = action.payload;
            break;
        default:
            break;
    }
    return newState;
}

// combine reducers

const rootReducer = combineReducers({
    book: bookManager,
    music: musicManager,
    movie: movieManager
});

// create store

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
window.store = store;

// add debugging and console logging to store

store.subscribe(() => {
    console.table(store.getState());
})

// add dispatches

store.dispatch(addBook('Rent', 'Chuck Pahluniuk', 280));
store.dispatch(removeBook(0));
store.dispatch(updateBook(0, "Rent", "Chuck Palahniuk", 281));

store.dispatch(addMusic('Ok Computer', 'Radiohead', 14));
store.dispatch(addMusic('Reptilians', 'STRFKR', 11));
store.dispatch(removeMusic(1));
store.dispatch(updateMusic(1, 'Reptilians', 'STRFKR', 12));

store.dispatch(addMovie('A League of Their Own', 1994, 'drama'));
store.dispatch(addMovie('Fight Club', 1999, 'drama'));
store.dispatch(updateMovie(2, "Fight Club", 1999, 'Action'));
store.dispatch(removeMovie(0));
store.dispatch(removeMovie(0));
store.dispatch(removeMovie(10));