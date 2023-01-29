export const BASE_URL = `https://api.spotify.com/v1`;

// add more endpoints

export const apiEndpoints = {
  getUserPlaylist: (userId) => {
    return `/users/${userId}/playlists`;
  },
  getCategories: () => {
    return `/browse/categories`;
  },
  getNewRelease: () => {
    return `/browse/new-releases?country=IN`;
  },
};