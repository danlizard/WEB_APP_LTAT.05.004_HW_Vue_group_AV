

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

		<form action="index.html"
			id="app"
			@submit="checkForm"
			method="post"
			novalidate="true"
		>

			<div>
				<p v-if="errors.length">
					<b>Please correct the following error(s):</b>
					<!-- <ul> -->
					<p v-for="error in errors" style="color: red">{{ error }}</p>
					<!-- </ul> -->
				</p>

			<!-- <label for="Username"><b>Username</b></label> -->
			<input type="email" id="email" v-model="email" placeholder="Enter email" name="email" Required> <br> <br>
		
			<!-- <label for="psw"><b>Password</b></label> -->
			<input type="password" id="password" placeholder="Enter password" name="password" Required> <br> <br>
		
			<!-- <label> <input type="checkbox" checked="checked" name="remember"> Remember me <br> <br> </label> -->
			<button id="login_button" type="submit" value="Submit">Login</button><br> <br>
			</div>
		</form>

		<a style="cursor: default;" href="https://support.google.com/edu/classroom/thread/85592498/404-that%E2%80%99s-an-error-the-requested-url-was-not-found-on-this-server-that%E2%80%99s-all-we-know?hl=en">
			<p style="color: lightgreen;">Forgot password</p>
		</a>
	</div>
</div>
</main>
</template>

<script>
export default {
name: "Register",
data: function() {
	return {
		errors: [],
		name: null,
		email: null,
		movie: null
}
},
methods: {
checkForm: function (e) {
	this.errors = [];

	if (!this.password) {
	this.errors.push("Password enterering is required.");
	} 

	if (!this.validPasswordLen(this.password)) {
	this.errors.push('Paddword length must be from 8 to 15 chars');
	}
	if (!this.validPasswordOneUpper(this.password)) {
	this.errors.push('At least one upcase letter');
	}

	if (!this.validPasswordTwoLower(this.password)) {
	this.errors.push('At least two lowercase letters are needed');
	}

	if (!this.validPasswordOneNumeric(this.password)) {
	this.errors.push('At least one number is required');
	}

	if (!this.validPasswordStartsWithUpper(this.password)) {
	this.errors.push('Capital letter must be the first');
	}
	if (!this.validPasswordIncludesUnderscore(this.password)) {
	this.errors.push('_ must be included');
	}

	if (!this.email) {
	this.errors.push('Email required.');
	}

	if (!this.errors.length) {
	return true;
	}

	e.preventDefault();
},
// validPassword: function (passwd) {
// 	var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// 	return re.test(passwd);
// },
validPasswordIncludesUnderscore: function (passwd) {
	var re = /_/g;
	return re.test(passwd);
},
validPasswordStartsWithUpper: function (passwd) {
	var re = /^[A-Z]/;
	return re.test(passwd);
},
validPasswordOneNumeric: function (passwd) {
	var re = /[0-9]/;
	return re.test(passwd);
},
validPasswordTwoLower: function (passwd) {
	var re = /(?=(.[a-z]){2})/;
	return re.test(passwd);
},
validPasswordOneUpper: function (passwd) {
	var re = /(?=(.[A-Z]){1})/;
	return re.test(passwd);
},
validPasswordLen: function (passwd) {
	return passwd.length>7 && passwd.length<15;
},
}
}
</script>

<style scoped>

</style>