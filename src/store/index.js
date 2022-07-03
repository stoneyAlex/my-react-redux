/*
 * @Author: shimingxia
 * @Date: 2022-06-06 10:48:08
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-07-01 17:35:41
 * @Description: 
 */
// import {createStore, applyMiddleware, combineReducers} from 'redux'
// import thunk from "redux-thunk";
// import logger from "redux-logger";
// import promise from "redux-promise";

import {createStore, applyMiddleware, combineReducers} from "../myredux/";

import isPromise from "is-promise";

export const countReducer = (state = 0, {type, payload = 1}) => {
  switch (type) {
    case "ADD":
      return state + payload;
    //如果state是对象
    // return {...state, ...newState};
    case "MINUS":
      return state - payload;
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({home: countReducer}),
  applyMiddleware(thunk, logger, promise)
);

function logger({getState}) {
  return next => action => {
    console.log("-----------------------"); //

    console.log(action.type + "执行了！"); //

    const prevState = getState();
    console.log("prev state", prevState); //

    const returnValue = next(action);
    const nextState = getState();
    console.log("next state", nextState, returnValue); //

    console.log("-----------------------"); //

    return returnValue;
  };
}

function thunk({dispatch, getState}) {
  return next => action => {
    if (typeof action === "function") {
      return action(dispatch, getState);
    }
    return next(action);
  };
}

function promise({dispatch}) {
  return next => action => {
    return isPromise(action) ? action.then(dispatch) : next(action);
  };
}

export default store;