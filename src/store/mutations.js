import {
    INCREMENT,
    DECREMENT
} from './mutations-type'

const mutations = {
    [INCREMENT](state) {
        state.counter++
    },
    decrement: state => {
        state.counter--
    },
    addCount: (state, payload) => {
        state.counter += payload
    }
}

export default mutations