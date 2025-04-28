// store.js
import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './venueSlice';
import addOnReducer from './addOnsSlice';

export default configureStore({
  reducer: {
    venue: venueReducer,
    addon: addOnReducer,
  },
});
