const { validationResult } = require('express-validator');

const ProductModel = require('../models/product')

class ProductController {
  static displayDashboard = (req, res) => {
    const products = ProductModel.getP()
    res.render('dashboard', {
      products: products,
      errorMessage: ''
    })
  }

  static fetchProducts = (req, res) => {
    const products = ProductModel.getP()
    res.json(products)
  }

  static createProduct = (req, res) => {
    const products = ProductModel.getP()
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
      return res.render('dashboard', {
        products,
        errorMessage: errors.array()[0].msg
      })
    }
  
    const { title, currentPrice, mrp, imageURL } = req.body
    const newProduct = { title, currentPrice, mrp, imageURL }
    ProductModel.createP(newProduct)
    res.redirect('/dashboard')
  }

  static updateProduct = (req, res) => {
    const { id } = req.params
    const { title, currentPrice, mrp, imageURL } = req.body
    const updatedProduct = { title, currentPrice, mrp, imageURL }
    ProductModel.updateP(Number(id), updatedProduct)
    res.send('Product updated successfully')
  }

  static deleteProduct = (req, res) => {
    const { id } = req.params
    ProductModel.deleteP(Number(id))
    res.send('Product deleted successfully')
  }
}

module.exports = ProductController