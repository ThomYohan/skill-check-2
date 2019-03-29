import React, { Component } from 'react'
import Product from '../Product/Product'

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
           product: props.product
        }
    }

    render() {
        //failed at mapping over data
        // let inventoryList = this.props.map((product) => {
        //     return <Product product={product} key={product.id}/>
        // })
        console.log('error in inventoryList')
        return(
            <div>
                <div>Dashboard</div>
                <div>
                    <Product />
                    {/* {inventoryList} */}
                </div>
            </div>
        )
    }
}

export default Dashboard