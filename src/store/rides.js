import axios from 'axios';

const state = {
  searchResults: [],
  isLoading: false,
  error: null,
  params: {}
};

const getters = {
  searchResults: (state) => state.searchResults,
  isLoading: (state) => state.isLoading,
  error: (state) => state.error,
};

const actions = {
  async search({ commit }, query) {
    commit('setLoading', true);
    try {
      const response = await axios.get(`https://us-central1-ridesharecr-365103.cloudfunctions.net/return_rides_js?search=${query}&field=origin`);
      commit('setSearchResults', response.data);
      commit('setError', null);
    } catch (error) {
      commit('setError', error);
    } finally {
      commit('setLoading', false);
    }
  },
};

const mutations = {
  setSearchResults(state, searchResults) {
    state.searchResults = searchResults;
  },
  setSearchParams(state, searchResults) {
    state.searchParams = searchParams;
  },
  setLoading(state, isLoading) {
    state.isLoading = isLoading;
  },
  setError(state, error) {
    state.error = error;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
