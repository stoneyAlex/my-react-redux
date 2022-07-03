/*
 * @Author: shimingxia
 * @Date: 2022-06-06 11:13:10
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-06-06 11:38:14
 * @Description: 
 */
export default function createStore(reducer, enhancer) {
  if (enhancer) {
    return enhancer(createStore)(reducer);
  }
  let currentState;
  let currentListeners = [];
  function getState() {
    return currentState;
  }

  function dispatch(action) {
    // 修改当前state
    currentState = reducer(currentState, action);
    currentListeners.forEach(listener => listener());
    return action;
  }

  function subscribe(listener) {
    currentListeners.push(listener);
    return () => {
      const index = currentListeners.indexOf(listener);
      currentListeners.splice(index, 1);
    };
  }

  dispatch({type: "REUDX/KKB/OOOOO"});

  return {
    getState,
    dispatch,
    subscribe
  };
}