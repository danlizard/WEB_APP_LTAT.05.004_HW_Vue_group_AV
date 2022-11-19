<script setup>
import router from '../router';
</script>

<template>
<header>
  <div class="navigation_bar">
    <div style="min-width: 12vw; max-width: 200px"></div>
    <button @click="goHome">
        Home
    </button>
    <button @click="goSignUp">
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

<script>
export default {
  methods: {
    goHome () {router.push('/')},
    goSignUp () {router.push('/signup')},
  },
};
</script>