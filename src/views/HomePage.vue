<template>
  <main>
  <nav class="feed_container">
		<div class="feed_starter"></div>

    <div class="post_whole" id="item-list" v-for="item in itemsList" :key="item.id">
      <itemPost :item=item></itemPost>
    </div>


    <!-- <itemPost text = "HELLO"/> -->

    <button class="reset_btn" v-on:click="ResetLikes "> Reset likes </button>
		<div style="height:2vh; background-color:lightgreen" id="postCap"></div>
  </nav>
  </main>
</template>


<script>
import ItemPostComp from '../components/itemPostComp.vue';
import itemPost from '../components/itemPost.vue';

export default {
name: "Home",
components: { ItemPostComp, itemPost },
data: function() {
return {}
},
computed: {
    itemsList(){
return this.$store.state.postItemList
},
},
methods: {
IncreasePrice: function() {
    /*
    When using the strict mode in the vuex store, we cannot mutate state outside mutation handlers.
    Therefore, using the following function will produce an error
    
    this.$store.state.productList.forEach(product => {
        product.price += 1;
        }) 
    */
},
ResetLikes: function() {
  this.$store.dispatch("ResetLikesAct")
},

}
}
</script>

<style scoped>
.reset_btn {
  position: fixed;
  bottom: 10vh;
  left: 50vw;
  margin: 0;
  border: 4px lightgreen solid;
  background-color: whitesmoke;
  border-radius: 1vw;
  padding: 3px;
}
</style>