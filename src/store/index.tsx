import {combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import GalleryReducer from './galleryReducer';

const reducers =  combineReducers({
  gallery: GalleryReducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
});

export default store;
