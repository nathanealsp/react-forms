const a = { name: "Nathaneals", age: 35 };
const b = Object.assign({}, a, { age: 45 });

console.log(a, b);
// {name: "Nathaneals", age: 35}
// {name: "Nathaneals", age: 45}

console.log(Object.keys(a));
console.log(Object.values(a));

const Objd = Object.values(a).map(val => {val * 5; })
console.log(Objd);

const c = [0, 1, 2];
const d = [...c, 4, 5, 6];
console.log(c, d);
//  [0, 1, 2] , [0, 1, 2, 4, 5, 6]

import { createStore } from "redux";

// REDUX SUMMARY

// 1.REDUCER
// 2.STORE
// 3.SUBSCRIBE / LISTENER
// 4.DISPATCH

// 1.CREATING A REDUCER
// (PARAMS ARE STATE & ACTION FROM DSIPATCHER)
const reducer = (state, action) => {
  if (action.type === "INC") {
    return state + action.payload;
  }
  if (action.type === "DEC") {
    return state - action.payload;
  }
  return state;
};

// 2.WE CREATE A STORE BY CALLING CREATESTORE AND PASSING
// A REDUCER/ ROOT REDUCER AND STATE
const store = createStore(reducer, 0);

// 3.CREATED A LISTENER (LOGS STATE)
store.subscribe(() => {
  console.log("The store changed", store.getState());
});

// 4.DISPATCH (TAKES IN A ACTION TYPE & PAYLOAD) // ACTION CREATOR
store.dispatch({ type: "INC", payload: 2 });
store.dispatch({ type: "INC", payload: 200 });
store.dispatch({ type: "DEC", payload: 12 });
