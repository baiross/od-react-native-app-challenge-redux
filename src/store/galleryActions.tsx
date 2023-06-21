import axios from "axios";
import { BASE_URL } from "../../constants/apiConfig";
import { FETCH_GALLERY_FAILURE, FETCH_GALLERY_REQUEST, FETCH_GALLERY_SUCCESS, GalleryActionTypes } from "./galleryActionTypes";
import { Dispatch } from "redux";
import { GalleryState } from "../types/galleryState";

// action to fetch gallery data from the API
export const fetchData = () => {
  return (dispatch: Dispatch<GalleryActionTypes>) => {
    dispatch({type: FETCH_GALLERY_REQUEST});
    axios
      .get<GalleryState>(`${BASE_URL}/api/od/challenge/react/redux/challenge-endpoint`)
      .then((response) => {
        const data = response.data;
        dispatch({type: FETCH_GALLERY_SUCCESS, payload: data});
      })
      .catch((error) => {
        dispatch({type: FETCH_GALLERY_FAILURE, payload: error.message});
      });
  };
};
