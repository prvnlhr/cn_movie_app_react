import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import "./index.css";
import App from "./components/App";
//importing root reducer
import rootReducer from "./reducers";
import thunk from "redux-thunk";
//curried function logger (obj , next ,action)
// redux will call this internally
// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       //middleware code
//       console.log("ACTION_TYPE =", action.type);
//       next(action);
//     };
//   };
// };
// another way of writing middleware logger function
const logger = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action !== "function") {
    console.log("ACTION_TYPE =", action.type);
  }

  next(action);
};
// const thunk = ({ dispatch, getState }) => (next) => (action) => {
//   if (typeof action == "function") {
//     action(dispatch);
//     return;
//   }
//   next(action);
// };

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
console.log("store", store);

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById("root")
);

// console.log("Before state", store.getState());

// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{ name: "Superman" }],
// });
// console.log("After state", store.getState());

//passing store to App as props
