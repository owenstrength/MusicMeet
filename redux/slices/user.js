import { createSlice } from "@reduxjs/toolkit";
import { logOut, storeData } from "../../utils/storage";
import axiosInstance from "../../services/axiosInterceptor";
import { getData } from "../../utils/storage";


const initialState = {
  isLoading: true,
  isAuthenticated: false,
  userData: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state) => {
      state.isLoading = true;
    },
    getUserSuccess: (state, { payload }) => {
      state.userData = payload;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
  },
});

export const userSelector = (state) => state.user;

export const { getUser, getUserSuccess } = userSlice.actions;

export default userSlice.reducer;

export const getCurrentUser = () => {
  return async (dispatch) => {
    dispatch(getUser());
    try {
      const response = await axiosInstance.get("/me");
      storeData("@userData", JSON.stringify(response.data));
      storeData("@userid", response.data.id);
      getUserSuccess(response.data);
      return response.data;
    } catch (error) {
      console.log("Error USER.JS", error);
      console.log(error.status)
      if (error.response.status == 401) {
        logOut();
      }
    }
  };
};

export const getCurrentUserTopArtist = () => {
  return async (dispatch) => {
    dispatch(getUser());
    try {
      const response = await axiosInstance.get("/me/top/artists");
      storeData("@userTopArtists", JSON.stringify(response.data.items));
      getUserSuccess(response.data);
      return response.data;
    } catch (error) {
      console.log("Error USER.JS", error);
      console.log(error.response.status)
      if (error.response.status == 401) {
        logOut();
      }

    }
  };
};

export const getCurrentUserTopSongs = () => {
  return async (dispatch) => {
    dispatch(getUser());
    try {
      const response = await axiosInstance.get("/me/top/tracks");
      storeData("@userTopSongs", JSON.stringify(response.data.items));
      getUserSuccess(response.data);
      return response.data;
    } catch (error) {
      console.log("Error USER.JS", error);
      console.log(error.response.status)
      if (error.response.status == 401) {
        logOut();
      }

    }
  };
};

export const getUserTopGenres = (timeRange) => {
  return async (dispatch, getState) => {
    try {
      dispatch(getUser());

      const response = await axiosInstance.get("/me/top/artists");

      const artists = response.data.items;

      const genres = {};
      artists.forEach(artist => {
        artist.genres.forEach(genre => {
          if (genre in genres) {
            genres[genre] += 1;
          } else {
            genres[genre] = 1;
          }
        });
      });

      const sortedGenres = Object.entries(genres).sort((a, b) => b[1] - a[1]);

      getUserSuccess(response.data);
      storeData("@userTopGenres", JSON.stringify(sortedGenres.slice(0, 5).map(genre => genre[0])));
      return sortedGenres.slice(0, 5).map(genre => genre[0]);
    } catch (error) {
      console.error(error);
    }
  };
};
