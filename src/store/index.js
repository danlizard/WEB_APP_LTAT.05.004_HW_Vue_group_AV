import { createStore } from 'vuex'

export default createStore({
    strict: true,

    state: {
        postItemList: [
            {id: 1, text: "WHy doesn't it work", image_path: "", date: "1 Dec, 2022", likes: 0},
            {id: 2, text: "tartu cool", image_path: "", date: "12 Dec, 2022", likes: 0},
            {id: 3, text: "it works WHATT", image_path: "dog.png", date: "12 Dec, 2022", likes: 0},
            {id: 4, text: "Tartu keke", image_path: "", date: "15 Dec, 2022", likes: 0},
            {id: 5, text: "look at the dog that I just drew it's so postmodern", image_path: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=", date: "16 Dec, 2022", likes: 0},
            {id: 6, text: "Tartu keke", image_path: "", date: "15 Dec, 2022", likes: 0},
            {id: 7, text: "This be the lucky post", image_path: "clover.jpg", date: "7 Jul, 2007", likes: 0},
            {id: 8, text: "Time travel", image_path: "", date: "1 Jan, 1", likes: 0},
            {id: 9, text: "Truly the funny time", image_path: "", date: "4 Feb, 2069", likes: 0},
            {id: 10, text: "This rat is so thick!", image_path: "fatrat.jpg", date: "15 Dec, 2022", likes: 0},
            {id: 11, text: "Never gonna give you up never gonna let you down", image_path: "", date: "14 Jan, 2019", likes: 0},
            ]
    },
    getters: {},
    mutations: {
        ResetLikes: state => {
            state.postItemList.forEach(item => {
                item.likes = 0;
            })
        },
        AddLikes(state, id) {
            state.postItemList[state.postItemList.findIndex(p=>p.id == id)].likes += 1
        },
    },
    actions: {
        ResetLikesAct: act => {
            setTimeout(function() {
                act.commit("ResetLikes")
            }, 1000)
        },
        AddLikesAct(act, id) {
            setTimeout(function() {
                act.commit("AddLikes", id)
            }, 1000)
        },
    }
})