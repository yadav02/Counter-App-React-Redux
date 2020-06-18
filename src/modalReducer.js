import {MODAL_OPEN, MODAL_CLOSE} from './action';

const initialState = {
    isOpen:false,
    name:"",
    text:""
}
export default function reducer(state=initialState, action){
    if(action.type === MODAL_OPEN){
        return{
            ...state, 
            isOpen:true,
            name:action.payload.name,
            text:action.payload.text
        }
    }
    if(action.type === MODAL_CLOSE){
        return{
            ...state,
            isOpen:false,
            name:"",
            text:""
        }
    }
return state;
}