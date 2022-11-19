<script setup>

</script>

<template>
  <main>
    <div style="background-color: lightgreen; min-height:100vh; padding: 0px; margin: 0px; margin-left:-2vw; margin-right:-2vw;">
      <div class="login_window">
		  <p style="font-weight: bold; margin-top: 6vh;">Welcome to LimeList</p>
		  <a style="cursor: default;" href="https://support.google.com/edu/classroom/thread/85592498/404-that%E2%80%99s-an-error-the-requested-url-was-not-found-on-this-server-that%E2%80%99s-all-we-know?hl=en">
			  <p style="color: lightgreen;">Create an account</p>
		  </a>
		  <p>or</p>
		  <p>Please log in</p>

		  <form action="index.html">
			  <div>
			    <!-- <label for="Username"><b>Username</b></label> -->
			    <input type="email" placeholder="Enter email" name="email" Required> <br> <br>
		  
			    <!-- <label for="psw"><b>Password</b></label> -->
			    <input type="password" minlength="8" placeholder="Enter password" name="psw" Required> <br> <br>
		  
			    <!-- <label> <input type="checkbox" checked="checked" name="remember"> Remember me <br> <br> </label> -->
			    <button id="login_button" type="submit">Login</button><br> <br>
			  </div>
		  </form>

		  <a style="cursor: default;" href="https://support.google.com/edu/classroom/thread/85592498/404-that%E2%80%99s-an-error-the-requested-url-was-not-found-on-this-server-that%E2%80%99s-all-we-know?hl=en">
			  <p style="color: lightgreen;">Forgot password</p>
		  </a>
	    </div>
    </div>
  </main>
</template>