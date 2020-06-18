import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getProducts} from './action'

function Products({getProducts,loading,products}) {
    React.useEffect(()=>{
        getProducts();
    },[getProducts])
    if(loading){
        return <h2 className="section-title">Loading...</h2>
    }
    
    return (
        <section className="section">
        <h2 className="section-title">Products</h2>
        <ul className="products">
        {products.map(item =>{
            return <li key={item.id} className="product">
            <img src={item.preview} alt={item.name}/>
            <h4>{item.name}</h4>
            </li>
        })}
        </ul>
        </section>
    )
}

Products.propTypes = {
    loading:PropTypes.bool.isRequired,
    products:PropTypes.arrayOf(PropTypes.object).isRequired,
    getProducts:PropTypes.func.isRequired,
}
 const mapStateToProps = ({productState:{products,loading}})=>{
     return {products, loading}
 }

export default connect(mapStateToProps, {getProducts}) (Products);

