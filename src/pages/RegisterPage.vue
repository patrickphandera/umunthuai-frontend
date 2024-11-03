<template>
    <q-page class="flex flex-center">
      <q-card class="q-pa-md" style="max-width: 400px; width: 100%;">
        <q-card-section class="text-center">
          <div class="text-h6">Kulembetsa</div>
        </q-card-section>
  
        <q-card-section>
          <q-form @submit.prevent="register">
            <q-input
              v-model="username"
              label="Zina Lanu"
              outlined
              required
              class="q-mb-md"
            />
           <q-input
              v-model="age"
              label="Zaka"
              outlined
              required
  type="number"
              class="q-mb-md"
            />
            <q-input
              v-model="phone"
              label="Phone"
              type=""
              outlined
              required
              class="q-mb-md"
            /> 
            <q-input
              v-model="district"
              label="Boma"
              outlined
              required
              class="q-mb-md"
            />
            <q-input
              v-model="password"
              label="Password"
              type="password"
              outlined
              required
              class="q-mb-md"
            />
            <q-input
              v-model="confirmPassword"
              label="Confirm Password"
              type="password"
              outlined
              required
              class="q-mb-md"
            />
  
            <q-btn label="Register" type="submit" color="primary" class="full-width q-mb-md" />
          </q-form>
        </q-card-section>
  
        <!-- Navigation to Login -->
        <q-card-section class="text-center">
          <q-btn flat label="Already have an account? Login" @click="goToLogin" />
        </q-card-section>
  
        <!-- Error Message Section -->
        <q-card-section v-if="error" class="text-negative text-center">
          {{ errorMessage }}
        </q-card-section>
      </q-card>
    </q-page>
  </template>
  
  <script>
  import { registerUser } from '../services/auth.service';
  
  export default {
    data() {
      return {
        username: '',
        phone: '',
        district: '',
        password: '',
        confirmPassword: '',
        error: false,
        errorMessage: '',
        age: '',
      };
    },
    methods: {
      async register() {
        if (this.password !== this.confirmPassword) {
          this.error = true;
          this.errorMessage = 'Passwords do not match.';
          return;
        }
        try {
          const userData = {
            username: this.username,
            phone: this.phone,
            district: this.district,
            password: this.password,
            age: this.age,
          };
    
          const response = await registerUser(userData);
          console.log('Registration successful:', response);
          this.$router.push('/auth/login');
        } catch (error) {
          this.error = true;
          this.errorMessage = error.response.data.error || 'Registration failed. Please try again.';
          console.error('Registration failed:', this.errorMessage);
        }
      },
      goToLogin() {
        this.$router.push('/auth/login');
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
  