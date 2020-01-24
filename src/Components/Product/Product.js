import React, { Component } from 'react'; 
import axios from 'axios'; 
import devmtn from '../devmtn.png'; 

export class Product extends Component {


    //AXIOS DELETE 
    delete = id => {
        axios.delete(`/api/delete/${id}`)
        .then(()=>{
            this.props.updateList(); 
        })
        .catch(err=>console.log('Error is Product.js', err)); 
    }


    render() {
        const {product, edit} = this.props; 
        return (
            <div className='product' >
                <img src={product.imgurl} style={{width: '100px', height: '100px'}} alt = {devmtn} /> 
                <h5> Name: {product.name} </h5>
                <p> Price: ${product.price} </p>
                <main className='delete-edit-btn' >  
                    <button onClick={()=>this.delete(product.id)} >Delete </button>
                    <button onClick={()=>edit(product.id)} > Edit </button>
                </main>
            </div>
        )
    }
}

export default Product
