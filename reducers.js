import {combineReducers} from 'redux';

function  exampleReducer(state={},action){
 switch (action.type){
   case "ExampleOfFilter":
   return {...state,ExampleData:action.data};
   break;
   default : return state
 }
}
function  exampleReducer1(state={},action){
 switch (action.type){
   case "ExampleOfFilter1":
   return {...state,ExampleData1:action.data}
    break;
   default : return state
 }
}
function  exampleReducer2(state={},action){
 switch (action.type){
   case "ExampleOfFilter2":
   return {...state,ExampleData2:action.data}
    break;
   default : return state
 }
}
let rootRducer = combineReducers({
exampleReducer:exampleReducer,
exampleReducer1:exampleReducer1,

})

export default rootRducer
