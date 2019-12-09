// actions call mutations that update state
export default {
  // addPet: (context, pet) => {
  //     context.commit('appendPet', pet)
  // }
  addPet: ({ commit }, payload) => {
    // calls mutations
    commit('appendPet', payload)
  }
}
