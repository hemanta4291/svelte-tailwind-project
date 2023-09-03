import axios from 'axios';

// Define the base URL for your API
const BASE_URL = 'https://restcountries.com/v3.1';

// Function to fetch data from the API
export async function fetchCountries() {
  try {
    const response = await axios.get(`${BASE_URL}/all`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// You can add more functions for other API endpoints as needed
