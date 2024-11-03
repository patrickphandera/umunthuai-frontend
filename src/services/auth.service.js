// src/services/register.js

import axios from "axios";
let token = localStorage.getItem("token");
const API_BASE_URL = "http://127.0.0.1:5000";
// Access the base URL from environment variables
// const API_BASE_URL = "https://umunthuai-backend.onrender.com";
// const API_BASE_URL = "https://umunthuai-backend.onrender.com";
// Function to handle user registration
export async function postData(data, endpoint) {
  try {
    // Make a POST request with headers
    const response = await axios.post(`${API_BASE_URL}/${endpoint}`, data, {
      headers: {
        Authorization: `Bearer ${token}`, // Add other headers as needed
        "Content-Type": "application/json",
      },
    });

    // Return the response data
    return response.data;
  } catch (error) {
    // Handle errors
    console.error("Request error:", error);
    throw error;
  }
}

export async function registerUser(userData) {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(credentials) {
  try {
    // Make a POST request to the login endpoint
    const response = await axios.post(`${API_BASE_URL}/login`, credentials);

    // Check if the response contains a token
    if (response.data.access_token) {
      // Save the token to local storage
      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("user", response.data.user_id);
      localStorage.setItem("role", response.data.role);
    }
    console.log(response);
    // Return the response data (e.g., user info, success message)
    return response.data;
  } catch (error) {
    // Handle errors (e.g., show an error message to the user)
    console.error("Login error:", error);
    throw error;
  }
}

export async function logoutUser() {
  try {
    // Make a POST request to the logout endpoint with headers
    await axios.post(
      `${API_BASE_URL}/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`, // Pass the token in the headers
        },
      }
    );

    // Clear local storage and redirect
    localStorage.clear();
    return (window.location.href = "/auth/login");
  } catch (error) {
    // Handle errors
    console.error("Logout error:", error);
    throw error;
  }
}

export function isAuthenticated() {
  return !!localStorage.getItem("token");
}
