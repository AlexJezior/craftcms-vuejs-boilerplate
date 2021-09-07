import { createStore } from 'vuex'

export default createStore({
  state: {
    pageLoading: true,
  },
  getters: {
    isPageLoading: (state) => {
      return state.pageLoading
    },
  },
  mutations: {
    setPageLoadingFalse(state) {
      state.pageLoading = false
    },
    setPageLoadingTrue(state) {
      state.pageLoading = true
    },
  },
  actions: {},
  modules: {},
})
