import React, { Component } from 'react'
import Axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            price: 0,
            imageUrl: ""
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleResetClick = this.handleResetClick.bind(this)
    }

    // createProduct = product => {
    //     Axios.post('api/product', product)
    //         .then( res => {
    //             this.setState({product: res.data})
    //         }).catch( err => {
    //             console.log('error in form.js', err)
    //         })
    }

    handleChange = e => {
        let { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    handleClick = () => {
        let item = this.state

        this.state.handleClick(item)
    }

    handleResetClick = () => {
        this.setState({
            name:"",
            price:0,
            imageUrl:""
        })
    }

    handleDeleteClick = () => {
        this.props.deleteProduct(this.state.id)
        this.setState({
            edit: false
        })
    }
    
    render() {
        return(
            <div>
                <div>Form</div>
                <input type="text" name="name" placeholder="name" onChange={this.handleChange}/>
                <input type="number" name="price" placeholder="0" onChange={this.handleChange}/>
                <input type="text" name="imageUrl" placeholder="imageUrl" onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Add To Inventory</button>
                <button onClick={this.handleResetClick}>Cancel</button>
                <button onClick={this.handleDeleteClick}>Delete</button>
            </div>
        )
    }
}

export default Form