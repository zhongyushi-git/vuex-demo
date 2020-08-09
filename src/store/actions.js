const actions = {
    decAnysc: context => {
        setTimeout(() => {
            context.commit('decrement')
        }, 2000)
    }
}

export default actions