<template>

<div class="selection showUp">
    <div class="center">
      <a>Sign-Up</a>

      <form @submit.prevent="validateForm" id="signUpForm" enctype="multipart/form-data">
        <!-- Email Input -->
        <div>
          <label for="eMail">Email:</label>
          <textarea
            id="eMail"
            v-model="email"
            name="eMail"
            placeholder="Email"
            required
            rows="1"
          ></textarea>
        </div>
        <br />

        <!-- Password Input -->
        <div>
          <label for="passWord">Password:</label>
          <textarea
            id="passWord"
            v-model="password"
            name="passWord"
            placeholder="Password"
            required
            rows="1"
          ></textarea>
        </div>
        <br />

        <!-- Validation Message -->
        <div id="validationMessage" style="color: red;">{{ validationMessage }}</div>

        <!-- Submit Button -->
        <div>
          <button type="submit">Sign-Up</button>
        </div>
      </form>
    </div>
  </div>
    </template>

<script>
    export default {
        name:"SignUp",
        data() {
    return {
      email: "", // Data binding for email input
      password: "", // Data binding for password input
      validationMessage: "", // Holds validation error messages
    };
  },
        methods: {
            validateForm() {
                this.validationMessage = ""; 
  
    // Validation rules
    const minLength = 8; // Minimum length
    const maxLength = 15; // Maximum length
    const containsNumber = /\d/; // Regex to check for numbers
    const containsUppercase = /[A-Z]/; // Regex to check for uppercase letters
    const startsWithUppercase = /^[A-Z]/; // Regex to check if it starts with an uppercase letter
    const containsUnderscore = /_/; // Regex for at least one underscore
  
     // Check length
     if (this.password.length < minLength || this.password.length > maxLength) {
        this.validationMessage = `Password must be between ${minLength} and ${maxLength} characters long.`;
        return;
      }

      // Check for numbers
      if (!containsNumber.test(this.password)) {
        this.validationMessage = "Password must contain at least one number.";
        return;
      }

      // Check for uppercase letters
      if (!containsUppercase.test(this.password)) {
        this.validationMessage = "Password must contain at least one uppercase letter.";
        return;
      }

      // Check if password starts with an uppercase letter
      if (!startsWithUppercase.test(this.password)) {
        this.validationMessage = "Password must start with an uppercase letter.";
        return;
      }

      // Check for underscore
      if (!containsUnderscore.test(this.password)) {
        this.validationMessage = "Password must contain at least one underscore (_).";
        return;
      }

      // If all validations pass
      alert("Form submitted successfully!");
      this.validationMessage = "";
      // Here, you can submit the form data to the server or reset the form
},
  },
}
</script>