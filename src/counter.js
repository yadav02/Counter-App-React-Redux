import React from 'react'
import { connect } from 'react-redux';
import {increase, decrease, reset, modalOpen} from './action'


 function Counter({name,count,increase,decrease,reset,modalOpen}) {
    
    return ( 
        <div className="container">
          <h1>Counter</h1>
          <h2>{name}</h2>
          <p className="counter">{count}</p>
          <div className="buttons">
           <button type="button" className="btn" onClick={decrease}>Decrease</button>
           <button type="button" className="btn" onClick={()=>{
               reset();
               modalOpen("Hello","Do you Really want to reset");
           }}>Reset</button>
           <button type="button" className="btn" onClick={increase}>increase</button>
          </div>
        </div>
        

    )
}
function mapStateToProps({countState:{count, name}}){
    return{count:count, name:name}
 }

//  function mapDispatchToProps(dispatch, ownProps){
//      console.log(ownProps)
//      return {
//         increase: ()=> dispatch(increase()),
//         decrease: ()=> dispatch({descrease()),
//         reset: ()=> {
//             dispatch(reset());
//             dispatch(modalOpen("Hello","Do you Really want to reset"))
//            } 
//          }
//       }
export default connect(mapStateToProps, {
    increase,
    decrease,
    reset,
    modalOpen
}) (Counter);