export const state = () => ({
  message: 'Test message',
})

export const getters = {
  getMessage(state) {
    return state.message
  },
}

export const mutations = {
  deleteMessage(state) {
    state.message = null
  },
}

export const actions = {
  DELETE_MESSAGE: ({ commit }) => commit('deleteMessage'),
}
