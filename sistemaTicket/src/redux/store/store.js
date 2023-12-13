//DEPENDENCIAS QUE NOS TRAE REDUX
import { createStore, applyMiddleware, compose } from "redux";

// import  thunkMiddleware  from "redux-thunk";
import thunk from "redux-thunk"
// import { ThunkMiddleware } from "redux-thunk";
// import * as ReduxThunk from "redux-thunk";
// import {composeWithDevTools} from "redux-devtools-extension";
// import thunk from "redux-thunk";
import rootReducer from "../reducer/reducer";


//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



//AQUI INVOCAMOS A CREATESTORE//esta ultima es para hacer petisiones a una api
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

