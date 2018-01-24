import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import moviesReducer from "./features/movies/reducer";

const rootReducer = combineReducers({
	app: moviesReducer,
	form: formReducer
});

export default rootReducer;
