<script setup>
import itemPost from '../components/itemPost.vue';
</script>

<template>
  <main>
  <nav class="feed_container">
		<div class="feed_starter"></div>

    <itemPost text = "HELLO"/>

		<div style="height:2vh; background-color:lightgreen" id="postCap"></div>
  </nav>
  </main>
</template>
