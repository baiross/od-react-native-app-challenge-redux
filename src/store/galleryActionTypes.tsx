import { GalleryState } from "../types/galleryState";

export const FETCH_GALLERY_REQUEST = 'FETCH_GALLERY_REQUEST';
export const FETCH_GALLERY_SUCCESS = 'FETCH_GALLERY_SUCCESS';
export const FETCH_GALLERY_FAILURE = 'FETCH_GALLERY_FAILURE';

interface FetchGalleryRequestAction {
  type: typeof FETCH_GALLERY_REQUEST;
}

interface FetchGallerySuccessAction {
  type: typeof FETCH_GALLERY_SUCCESS;
  payload: GalleryState;
}

interface FetchGalleryFailureAction {
  type: typeof FETCH_GALLERY_FAILURE;
  payload: string;
}

export type GalleryActionTypes =
  | FetchGalleryRequestAction
  | FetchGallerySuccessAction
  | FetchGalleryFailureAction;
