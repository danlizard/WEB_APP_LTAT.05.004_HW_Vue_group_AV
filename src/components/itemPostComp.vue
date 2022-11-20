<!-- <script setup>
    defineProps ({
        text: {
            type: String
        },
        image_data: {
            type: Image
        }
    })
</script> -->

<template>

    <itemPost class="post_whole" id= "item-list" v-for="item in itemsList" :key="item.id"/>

</template>


<script>

import itemPost from '../components/itemPost.vue';

export default {
    name: "ItemPostComp",
        // props: ["productList"],},
computed: {
    itemsList(){
return this.$store.state.postItemList
},

}
}
</script>