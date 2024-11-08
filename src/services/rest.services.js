
let API_BASE_URL = "https://umunthuai-backend.onrender.com";
import axios from "axios";
let token = localStorage.getItem("token");

export async function postData(data, endpoint) {
  try {
    // Make a POST request with headers
    const response = await axios.post(`${API_BASE_URL}/${endpoint}`, data, {
      headers: {
        Authorization: `Bearer ${token}`, // Add other headers as needed
        "Content-Type": "multipart/form-data",
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
export async function putData(data, endpoint) {
  try {
    // Make a POST request with headers
    const response = await axios.put(`${API_BASE_URL}/${endpoint}`, data, {
      headers: {
        Authorization: `Bearer ${token}`, // Add other headers as needed
        "Content-Type": "multipart/form-data",
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

export async function deleteData(endpoint) {
  try {
    // Make a POST request with headers
    const response = await axios.delete(`${API_BASE_URL}/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Add other headers as needed
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
export async function getData(endpoint, id) {
  try {
    // Make a POST request with headers
    const response = await axios.get(`${API_BASE_URL}/${endpoint}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Add other headers as needed
      },
    });

    // Return the response data
    // console.log(response.data)
    return response.data;
  } catch (error) {
    // Handle errors
    console.error("Request error:", error);
    throw error;
  }
}

export async function downloadData(endpoint) {
  try {
    // Make a GET request with headers and response type 'blob' for file downloads
    const result = await axios.get(
      `${API_BASE_URL}/download/v2/${endpoint}`,
      {}
    );
    // Return a success message or data if needed
    return result.data;
  } catch (error) {
    // Handle errors
    console.error("Request error:", error);
    throw error; // Re-throw the error if needed
  }
}
export async function getAllData(endpoint) {
  try {
    // Make a POST request with headers
    const response = await axios.get(`${API_BASE_URL}/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Add other headers as needed
      },
    });
    // Return the response data
    // console.log(response.data)
    return response.data;
  } catch (error) {
    // Handle errors
    console.error("Request error:", error);
    throw error;
  }
}
