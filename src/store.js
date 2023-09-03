
import { writable } from 'svelte/store';

// Create a writable store to hold the fetched countries data
export const countryDataStore = writable([]);

// Function to update the store with new countries data
export function setCountryDataStore(newCountries) {
    countryDataStore.set(newCountries);
}
