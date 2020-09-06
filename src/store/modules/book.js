/* eslint-disable */
import BookService from "@/services/BooksService.js"

export const namespaced = true

export const state = {
    books: [],
    booksByOne : [],
    booksByTwo : [],
    recommendationBooks: [],
    book: {},
    isLoading: true,
    skeletonCount: 4,
    linkServer: 'http://127.0.0.1:8000/'
}

export const mutations = {
    SET_BOOK(state,book){
        state.book = book
    },
    SET_BOOKS(state, books){
        state.books = books
    },
    SET_BOOKS_BY_ONE(state,bookByOne){
        state.booksByOne = bookByOne
    },
    SET_RECOMMENDATION_BOOKS(state, books){
        state.recommendationBooks = books
    }
}

export const actions = {
    fetchRecommendationBooks({commit}){
        BookService.getRecommendationBooks()
            .then(response => {
                commit('SET_RECOMMENDATION_BOOKS',response.data)
            })
            .catch(error => {
                console.log(error)
            })
    },
    fetchBooks({commit, state}){
        BookService.getBooks(state)
            .then(response => {
                commit('SET_BOOKS', response.data)
            })
            .catch(error => {
                console.log(error)
            })
    },
    fetchBooksBy({commit,state},{query,value}){
        BookService.getBooksBy(query, value)
            .then(response => {
                commit('SET_BOOKS_BY_ONE', response.data)
                //set loader to false so data can appear immediately
                state.isLoading = false
            })
            .catch(error => {
                console.log(error)
            })
    },
    //set a second parameter for slug
    fetchBook({commit},slug){
        //add return to wait response bookservice
        return BookService.getBook(slug)
            .then(response => {
                //commiting data to state and return it to router index
                commit('SET_BOOK', response.data)
                return response.data
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