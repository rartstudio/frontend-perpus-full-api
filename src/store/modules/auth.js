import AuthService from "@/services/AuthService.js"

export const namespaced = true

export const state = {
    error : null
}

export const mutations = {
    SET_USER_DATA(state,data){
        //save user data to localstorage
        localStorage.setItem('user',JSON.stringify(data.user))
        localStorage.setItem('usacco',data.access_token)
    },
    SET_USER_ERROR_NOTIF(state,error){
        state.error = error
    }
}

export const actions = {
    fetchRegister({commit},credential){
        return AuthService.getRegister(credential)
            .then(response => {
                commit('SET_USER_DATA',response.data)
                //dispatch to fetchUser
                //dispatch('user/fetchUser',null,{root:true})
            })
            .catch(error => {
                // commit('SET_USER_ERROR_NOTIF',error.response.data.errors)
                console.log(error.response)
            })
    },
    fetchLogin({commit},credential){
        return AuthService.getLogin(credential)
            .then(response => {
                commit('SET_USER_DATA',response.data)
                //dispatch to fetchUser
                //dispatch('user/fetchUser',null,{root:true})
            })
            .catch(error => {
                commit('SET_USER_ERROR_NOTIF',error.response.data.errors)
            })
    }
    
}

export const getters = {

}