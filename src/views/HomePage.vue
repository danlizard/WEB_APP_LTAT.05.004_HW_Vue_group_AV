<template>
  <main>
  <nav class="feed_container">
		<div class="feed_starter"></div>

    <item-post-comp></item-post-comp>

		<div style="height:2vh; background-color:lightgreen" id="postCap"></div>
  </nav>
  </main>
</template>


<script>
import ItemPostComp from '../components/itemPost.vue';

export default {
name: "Home",
components: { ItemPostComp },
data: function() {
return {}
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
DecreasePrice: function() {

}

}
}
</script>

<style scoped></style>