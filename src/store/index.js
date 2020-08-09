import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)


const store = new Vuex.Store({
    //存储状态
    state: {
        counter: 0
    },
    mutations,
    actions,
    getters
})

export default store