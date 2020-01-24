import React, { Component } from 'react'
import axios from 'axios';
import devmtn from '../devmtn.png'; 

export class Form extends Component {
    constructor(props) {
        super (props); 

        this.state = {
            id: 0,
            name: '', 
            price: 0, 
            imgurl: '', 
            editToggle: false
        }
        this.cancel = this.cancel.bind(this); 
    }


    // componentDidUpdate () {
    //     this.state.id ===0 && this.setState({id: 0, name: '', price: 0, imgurl: '', editToggle: false })
    // }


    componentDidMount () {
        if (this.props.match.params.id) {
            axios.get(`/api/productOne/${this.props.match.params.id}`)
            .then(res=> {
                const {name, price, imgurl} = res.data 
                this.setState({name: name, price: price, imgurl: imgurl, editToggle: true, id: this.props.match.params.id})
            })
        }
            
    }
    //Updating state, onChange event 
    handleChange = e => this.setState({[e.target.name]: e.target.value})

    //Cancelling input 
    cancel () {
        this.setState({name: '', price: 0, imgurl: ''})
        this.props.history.push('/')
    }

    //AXIOS POST 
    addProduct = () => {
        const {name, price, imgurl} = this.state; 
        axios.post('/api/product', {name, price, imgurl})
            .then(()=>{
                this.setState({name: '', price: 0, imgurl: '', editToggle: false})
                this.props.history.push('/')
            })
            .catch(err=>console.log(err))
         
    }



    //AXIOS PUT 
    saveChanges = () => {
        const {id, name, price, imgurl} = this.state; 
        axios.put(`/api/update/${id}`, {name, price, imgurl})
        .then(()=>{
            this.setState({name: '', price: 0, imgurl: '', editToggle: false, id: 0}) 
            this.props.history.push('/')
        })
        .catch(err=>console.log(err))
    }



    render() {
        const {name, price, imgurl, editToggle } = this.state; 
        return (
            <div id='form' >
                <img src={imgurl} style={{height: '40px', width: '60px'}} alt='' />
                <section>
                    <label> Image URL: </label>
                    <input name='imgurl' value={imgurl} onChange={e=>this.handleChange(e)} /> 
                </section>
                <section>
                    <label>Product Name: </label>
                    <input name='name' value={name} onChange={e=>this.handleChange(e)} /> 
                </section>
                <section>
                    <label>Price: </label>
                    <input name='price' value={price} onChange={e=>this.handleChange(e)} /> 
                </section>
                <main id='cancel-add-btn' >
                    <button onClick={this.cancel} >Cancel</button>
                    {!editToggle ?  
                        <button onClick={this.addProduct} >Add to Inventory </button> :
                        <button onClick={this.saveChanges} >Save Changes </button>
                    }
                </main>
            </div>
        )
    }
}

export default Form
