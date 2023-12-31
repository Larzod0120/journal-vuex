/*
El index es lo que se termina importando en el store
*/

import state from './state'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

const myCustomModule = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}

export default myCustomModule