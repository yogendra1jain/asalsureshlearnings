import {combineReducers} from 'redux';

function  exampleReducer(action,state){
 switch (action.type){
   case "ExampleOfFilter":
   return {...state,ExampleData:action.data}
 }
}
function  exampleReducer1(action,state){
 switch (action.type){
   case "ExampleOfFilter1":
   return {...state,ExampleData1:action.data}
 }
}
function  exampleReducer2(action,state){
 switch (action.type){
   case "ExampleOfFilter2":
   return {...state,ExampleData2:action.data}
 }
}
let rootRducer = combineReducers({
exampleReducer:exampleReducer,
exampleReducer1:exampleReducer1,

})
