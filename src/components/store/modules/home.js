export default {
  state: { count: 20 },
  getters: {},
  actions: {},
  mutations: {
    increments (state) {
      // mutate state
      state.count--
    }
  }
}
