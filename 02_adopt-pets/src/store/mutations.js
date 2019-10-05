
// actions call mutations that update state
export default {
    appendPet: (state, { species, pet}) => {
        state[species].push(pet)
    }
}