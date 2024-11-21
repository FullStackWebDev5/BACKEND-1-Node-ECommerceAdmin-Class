class ProductModel {
  static products = []
  static productId = 1

  constructor(title, currentPrice, mrp, imageURL) {
    this.id = ProductModel.productId
    this.title = title
    this.currentPrice = currentPrice
    this.mrp = mrp
    this.imageURL = imageURL
  }

  static getP = () => {
    return ProductModel.products
  }
  
  static createP = (productDetails) => {
    const { title, currentPrice, mrp, imageURL } = productDetails
    const newProduct = new ProductModel(title, currentPrice, mrp, imageURL)
    ProductModel.products.push(newProduct)
    ProductModel.productId++
  }
  
  static updateP = (id, updatedProduct) => {
    ProductModel.products = ProductModel.products.map(product => {
      if(product.id !== id) {
          return product
      } else {
          return { id, ...updatedProduct}
      }
    })
  }
  
  static deleteP = (id) => {
    ProductModel.products = ProductModel.products.filter(product => {
      if(product.id !== id) {
          return true
      } else {
          return false
      }
    })
  }
}

module.exports = ProductModel