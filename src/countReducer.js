import {INCREASE, DECREASE, RESET} from './action';

// Setup initial State
const initialState = {
  count: 0,
  name:"Satyendra"
}
export default function Reducer(state= initialState, action){
  
    switch(action.type){
      case DECREASE:
        return{...state, count: state.count -1};
      case INCREASE:
        return{...state, count: state.count + 1};
      case RESET:
        return{...state, count: 0};
  
      default: return state
    }
   
  }