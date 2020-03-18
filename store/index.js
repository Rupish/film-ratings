export const state = () => ({
  favorites: {}
});

export const mutations = {
  add (state, fav) {
    state.favorites[fav.imdbID] = fav;
    localStorage.setItem('favorites', JSON.stringify(state.favorites));
    // localStorage.setItem('favorites', JSON.stringify(state.favorites));
  },
  remove (state, id) {
    delete state.favorites[id];
    localStorage.setItem('favorites', JSON.stringify(state.favorites));
  },
  setFavs (state) {
    state.favorites = localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : {}
  }
};

