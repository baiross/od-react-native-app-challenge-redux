import { GalleryState } from '../types/galleryState';
import {
    FETCH_GALLERY_REQUEST,
    FETCH_GALLERY_SUCCESS,
    FETCH_GALLERY_FAILURE,
    GalleryActionTypes,
  } from './galleryActionTypes';
  
  
const initialState: GalleryState = {
  loading: false,
  photos: [],
  videos: [],
  details: [],
  comments: [],
  error: null,
};

const galleryReducer = (state = initialState, action: GalleryActionTypes): GalleryState => {
  switch (action.type) {
    case FETCH_GALLERY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_GALLERY_SUCCESS:
      return {
        ...state,
        loading: false,
        photos: action.payload.photos,
        videos: action.payload.videos,
        comments: action.payload.comments,
        details: action.payload.details
      };
    case FETCH_GALLERY_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default galleryReducer;
  