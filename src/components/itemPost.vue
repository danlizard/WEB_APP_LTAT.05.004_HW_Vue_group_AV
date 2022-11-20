<script setup>
    defineProps ({
        item: {required: true,},
    })
</script>

<template>

<div>
        
    <!-- <h1> Book list two</h1> -->
    
        <!-- <p class="item" v-for="item in itemsList" :key="item.id"> -->
        <!-- <p> -->
        <div class="post_date_container"><p class="post_date"> {{item.date}} </p></div>
        <div class="post_main_container">
            <img class="post_img" v-bind:src="item.image_path" alt="">
            <p class="post_text"> {{item.text}} </p>
        </div>
        <img v-on:click="addLike2Item(item)" class="like_button" src="like.png">
        <p class="post_likes" :id="'liken_'+item.id"> {{item.likes}} </p>

</div>

</template>

<script>

export default {
    name: "itemPost",
        // props: ["productList"],
    data: function() {
return {
    addLike2Item(item){
    console.log(item.id);
    // var target = document.getElementById('liken_'+item.id);
    // target.value = "hohoh";
    this.$store.dispatch('AddLikesAct', item.id)
    return 0
},
}},
}
</script>

<style scoped>
.like_btn{
    background: url("../public/like.png");
}
.item{
background: rgb(47, 255, 141);
margin-bottom: 5px;
padding: 3px 5px;
}
#comp-list-one{
background: #66e97c;
box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
margin-bottom: 30px;
padding: 10px 20px;
}
#comp-list-one ul{
padding: 0;
}
#comp-list-one li{
display: inline-block;
margin-right: 10px;
margin-top: 10px;
padding: 20px;
background: rgba(255,255,255,0.7);
}
.post_likes{
    border: 3px whitesmoke solid;
    background-color: green;
    padding: 2px;
    padding-left: 5px;
    padding-right: 5px;
    color: whitesmoke;
    border-radius: 1vh;
}
</style>