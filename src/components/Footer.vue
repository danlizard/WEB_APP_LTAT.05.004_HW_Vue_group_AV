<script setup>
</script>

<template>
    <footer>
        <div class="bottom_bar">
          <p>Ⓒ 2022 University of Tartu. The website is developed for LTAT.05.004 course</p>
        </div>
    </footer>
</template>

<style scoped>
p {
  font-size: 2vh;
  color: aquamarine;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
