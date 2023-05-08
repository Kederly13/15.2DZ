import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';

import { postsReducer } from './posts/reducers';



const store = configureStore({
    reducer: { postsReducer },
    enhancers: [composeWithDevTools(applyMiddleware(thunk))],
})

export { store };