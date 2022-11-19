<script setup>
</script>

<template>
<header>
  <div class="navigation_bar">
    <button>
        Home
    </button>
    <button>
        Signup
    </button>
    <a id="myLink" href="#" style="padding: 0px;">
		<img class="profile_pic" src="/profile2.png" alt="Your profile picture">
		    <div id="myDropdown" class="dropdown-content">
				<a href="#" id="myDropdownName">Link 1</a>
				<a href="#" id="myDropdownEmail">Link 2</a>
				<a href="#" id="myDropdownLogout">Link 3</a>
			</div>
	</a>
  </div>
</header>
</template>

<style scoped>
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
