const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')

const ProductController = require('./src/controllers/product')
const ProductMiddleware = require('./src/middlewares/product')

const app = express()

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(express.static('public'))

app.set('view engine', 'ejs')
app.set('views', __dirname + '/src/views')

app.get('/', (req, res) => {
  res.send('E-Commerce Admin Portal')
})

app.get('/dashboard', ProductController.displayDashboard)

// READ: GET /products
app.get('/products', ProductController.fetchProducts)

// CREATE: POST /products
app.post('/products', ProductMiddleware.validationRules, ProductController.createProduct)

// UPDATE: PATCH /products/:id
app.patch('/products/:id', ProductController.updateProduct)

// DELETE: DELETE /products/:id
app.delete('/products/:id', ProductController.deleteProduct)

app.listen(4000, () => {
  console.log('Server is up :)')
})

/*
  # Request Parameters **
    - Dynamic routes
    - Variables in the URL
    - Syntax: :param1, :param2, etc.
    - Access req params using 'params' property of req object
      - Eg.: req.params.param1

    app.get('/users/:username', (req, res) => {
      const { username } = req.params
      res.send(username)
    })

  # HTTP Methods
    - GET    : READ
    - POST   : CREATE
    - PATCH  : UPDATE
    - DELETE : DELETE

  # CRUD Concept
    - Create, Read, Update, Delete

  # E-Commerce Admin Portal
    - Products entity
      - Read: GET /products
      - Create: POST /products
      - Update: PATCH /products/:id
      - Delete: DELETE /products/:id

  # Validations
    - Check user input
    - Already learnt validation in FE
    - Required in BE, in case FE missed any validation/ request is done from a testing tool/ attacks by hackers (XSS, SQL injection, etc.)
    - We can also use external modules like express-validator

  # Resources
    - Req params: https://www.geeksforgeeks.org/express-js-req-params-property/
    - XSS: https://www.veracode.com/security/xss
    - Express Validator: 
      - https://www.npmjs.com/package/express-validator
      - https://express-validator.github.io/docs/
      - https://github.com/validatorjs/validator.js

  # Future
    - PATCH vs PUT
*/