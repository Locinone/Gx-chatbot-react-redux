import { configureStore } from "@reduxjs/toolkit";
import userreducer from "./userSlice";


// Etape 1: Créer un store

const store = configureStore({
	reducer: {
		// Add your reducers here
		user: userreducer,
	},
});

export default store;
