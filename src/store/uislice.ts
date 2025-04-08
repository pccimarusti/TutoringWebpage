import { createSlice } from '@reduxjs/toolkit';

// Define the UI state structure
interface UIState {
    isMobileMenuOpen: boolean;
    darkMode: boolean; // Example: If you want to add dark mode handling
}

// Initial state
const initialState: UIState = {
    isMobileMenuOpen: false,
    darkMode: false,
};

// Creating the slice
const uislice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    closeMobileMenu: (state) => {
      state.isMobileMenuOpen = false;
    },
    toggleDarkMode: (state) => {  // Optional: For handling dark mode
      state.darkMode = !state.darkMode;
    },
  },
});

// Exporting actions and reducer
export const { toggleMobileMenu, closeMobileMenu, toggleDarkMode } = uislice.actions;
export default uislice.reducer;
