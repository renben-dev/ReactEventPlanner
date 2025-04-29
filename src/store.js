// store.js
import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './venueSlice';
import addOnReducer from './addOnsSlice';
import mealsReducer from './mealsSlice';

export default configureStore({
  reducer: {
    venue: venueReducer,
    addons: addOnReducer,
    meals: mealsReducer,
  },
});
