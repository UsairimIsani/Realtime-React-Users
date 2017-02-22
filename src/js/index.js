import "../css/main.scss";
import React , { Component }from "react";
import ReactDOM , {render} from "react-dom";
import { createStore } from "redux";
import rootReducer from "./reducers";
import App from "./components/index.jsx";
import { Provider } from "react-redux";
 const store = createStore(rootReducer);
console.log(store.getState());

render(
    <Provider store = {store}>
        <App></App>
    </Provider>    
,document.getElementById('root'));
