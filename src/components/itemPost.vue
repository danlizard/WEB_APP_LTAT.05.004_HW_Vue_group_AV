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
    <!-- <div>
        <img src="profile2.png" alt="">
        <p>{{ text }}</p>
    </div> -->

    <div class="post_whole" id= "item-list" v-for="item in itemsList" :key="item.id">
        
    <!-- <h1> Book list two</h1> -->
    
        <!-- <p class="item" v-for="item in itemsList" :key="item.id"> -->
        <!-- <p> -->
        <div class="post_date_container"><p class="post_date"> {{item.date}} </p></div>
        <div class="post_main_container">
            <span class="post_img"> {{item.img}} </span>
            <p class="post_text"> {{item.text}} </p>
            <p class="post_likes"> {{item.likes}} </p>
        </div>
        <!-- </p> -->
    </div>
</template>


<script>
export default {
    name: "ItemPostComp",
        // props: ["productList"],
    data: function() {
return {

}},
computed: {
    itemsList(){
return this.$store.state.postItemList
}
}
}
</script>

<style scoped>
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
.price{
font-weight: bold;
color: #E8800C;
}
</style>

