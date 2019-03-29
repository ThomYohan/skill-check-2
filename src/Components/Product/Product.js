import React, { Component } from 'react'

class Product extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: props.name,
            price: props.price,
            imageUrl: props.imageUrl,
            edit: false
        }
    }

    render() {
        return(
            <div>Product</div>
        )
    }
}

export default Product