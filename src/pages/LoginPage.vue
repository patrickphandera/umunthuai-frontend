<template>
  <q-page class="flex flex-center">
    <q-card class="q-card">
      <q-card-section class="text-center">
        <div class="text-h6">Lowani</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit.prevent="login">
          <q-input
            v-model="username"
            label="Nambala"
            outlined
            required
            class="q-mb-md"
          />
          <q-input
            v-model="password"
            label="Pasiwedi"
            type="password"
            outlined
            required
            class="q-mb-md"
          />
          <q-btn
            label="Lowani"
            type="submit"
            color="primary"
            class="full-width q-mb-md"
          />
        </q-form>
      </q-card-section>

      <!-- Registration Redirect -->
      <q-card-section class="text-center">
        <q-btn flat label="Mulibe akawunti? Lembesani" @click="goToRegister" />
      </q-card-section>

      <!-- Error Message Section -->
      <q-card-section v-if="error" class="text-negative text-center">
        {{ errormsg }}
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { loginUser } from "../services/auth.service";

export default {
  data() {
    return {
      username: "",
      password: "",
      error: false,
      errormsg: "",
    };
  },
  methods: {
    goToRegister() {
      // Redirect to the registration page
      this.$router.push("/auth/register");
    },
    async login() {
      try {
        // Prepare the login data
        const loginData = {
          phone: this.username,
          password: this.password,
        };

        // Call the login service with the user credentials
        const response = await loginUser(loginData);

        // Check the response and redirect based on role
        if (response.role === "user") {
          this.$router.push("/admin");
        } else if (response) {
          this.$router.push("/chat");
          // this.error = true;
          // this.errormsg = 'Your account is being reviewed, you will be notified once the process is completed';
        } else {
          this.errormsg = "Your account fails to login";
        }
      } catch (error) {
        // Handle login errors
        this.error = true;
        console.log(error);
        this.errormsg =
          error.response.error || "Login failed. Please try again.";
        console.error("Login failed:", this.errormsg);
      }
    },
  },
};
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.q-card {
  width: 100%;
  max-width: 400px;
}

.q-card-section {
  padding: 16px;
}
</style>
