<template>
  <div class="selection showUp">
    <div class="center">
      <a>Login</a>

      <form @submit.prevent="validateForm" id="logInForm" enctype="multipart/form-data">
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
          <button type="submit">Login</button>
          <a> Or </a>
          <a href="" target="_self">          <!-- lisada õige sihtmärk -->
            <button>Sign-Up</button>
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name:"Login",
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
        alert("Yeah... we haven't implemented loging in yet. So have a nice cuppa until we wrangle the back end in.");
        this.validationMessage = "";
        // Here, you can submit the form data to the server or reset the form
      },
    },
  }
</script>