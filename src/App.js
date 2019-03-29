import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from'./Components/Header/Header'
import axios from 'axios'
// import Product from './Components/Product/Product'

class App extends Component {
  constructor() {
    super()

    this.state = {
      inventory: []
    }
  }

  // updateProduct = product => {
  //   axios.put(`/api/inventory/${product.id}`, product)
  //   .then( res => {
  //     this.setState({inventory: res.data})
  //   }).catch( err => {
  //     console.log('err in axios/updateProduct/app.js', err)
  //   })
  // }
  createProduct = product => {
    axios.post('/api/inventory', product)
    .then( res => {
      this.setState({inventory: res.data})
    }).catch( err => {
      console.log( 'err in axios/createProduct/app.js', err)
    })
  }

  componentDidMount() {
    axios.get('/api/inventory')
    .then( res => {
      this.setState({inventory: res.data})
    }).catch( err => {
      console.log('err in componentDidMount/app.js', err)
    })
  }


  render() {
    return (
      <div className="App">
        
        <Dashboard />
        <Form />
        <Header />
      </div>
    );
  }
}

export default App;
