import { createStore } from 'vuex'

export default createStore({
    strict: true,

    state: {
        postItemList: [
            {id: 1, text: "WHy doesn't it work", image_path: "", date: "1 Dec, 2022", likes: 0},
            {id: 2, text: "tartu cool", image_path: "", date: "12 Dec, 2022", likes: 0},
            {id: 3, text: "it works WHATT", image_path: "dog.png", date: "12 Dec, 2022", likes: 0},
            {id: 4, text: "Tartu keke", image_path: "", date: "15 Dec, 2022", likes: 0},
            {id: 5, text: "Tartu GG", image_path: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=", date: "16 Dec, 2022", likes: 0},
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