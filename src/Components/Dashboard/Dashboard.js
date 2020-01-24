import React, { Component } from 'react'; 
import Product from '../Product/Product'; 
import axios from 'axios'; 

export class Dashboard extends Component {
    constructor() {
        super(); 

        this.state = {
            inventory: []
        }
    }

    componentDidMount () {
        this.updateList(); 
    }

    //AXIOS GET REQUEST 
    updateList = () => {
        axios.get('/api/inventory')
            .then(res=>this.setState({inventory: res.data }))
            .catch(err=>console.log(`Error in axios.get: ${err}`))
    }

    //EDIT BUTTON
    edit = id => {
        this.props.history.push(`/edit/${id}`)
    }
    render() {
        const {inventory} = this.state; 
        return (
            <div>
                {inventory.map(product=>(
                    <Product 
                            key={product.id} 
                            product={product}
                            updateList={this.updateList}
                            edit={this.edit} />
                ))}
            </div>
        )
    }
}

export default Dashboard
