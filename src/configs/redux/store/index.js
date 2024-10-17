// import { legacy_createStore as createStore} from 'redux';
// import reducer from '../reducer';
import rootReducer from '../rootReducer';
import { configureStore } from '@reduxjs/toolkit';


const middlewares = [];

const storeBaru = configureStore({
	reducer: rootReducer(),
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			immutableCheck: false,
			serializableCheck: false,
		}).concat(middlewares),
	devTools: process.env.NODE_ENV === 'development',
})


export default storeBaru;


// import rootReducer from './rootReducer';
// import { configureStore } from '@reduxjs/toolkit';

// const middlewares = [];

// const store = configureStore({
// 	reducer: rootReducer(),
// 	middleware: (getDefaultMiddleware) =>
// 		getDefaultMiddleware({
// 			immutableCheck: false,
// 			serializableCheck: false,
// 		}).concat(middlewares),
// 	devTools: process.env.NODE_ENV === 'development',
// })