import { createStore } from 'vuex'

export default createStore({
    strict: true,

    state: {
        postItemList: [
            {id: 1, text: "WHy doesn't it work", image: "", date: "1 Dec, 2022", likes: 0},
            {id: 2, text: "tartu cool", image: "", date: "12 Dec, 2022", likes: 0},
            {id: 3, text: "Tartu keke", image: "", date: "15 Dec, 2022", likes: 0},
            {id: 4, text: "Tartu GG", image: "", date: "16 Dec, 2022", likes: 0},
            ]
    },
    getters: {},
    mutations: {},
    actions: {}
})