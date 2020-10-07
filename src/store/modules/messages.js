/* eslint-disable */
import MessageService from "@/services/MessagesService.js"

export const namespaced = true

export const state = {
    messages: null,
    status : null
}

export const mutations = {
    SET_MESSAGES(state,data){
        state.messages = data
    },
    SET_STATUS(state,data){
        state.status = data
    }
}

export const actions = {
    fetchMessages({commit}){
        return MessageService.getMessages()
            .then(response => {
                commit('SET_MESSAGES',response.data.data)
                console.log(response.data.data);
            })
            .catch(error => {
                console.log(error)
            })
    },
    readMessage({commit}, id){
        return MessageService.postReadMessage(id)
            .then(response => {
               commit('SET_STATUS',response.status)
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const getters = {
    getBooks: state => {
        return state.books
    },
    getLinkServer : state => {
        return state.linkServer
    }
}