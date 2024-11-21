const { body } = require('express-validator');

class ProductMiddleware {
  static validationRules = [
    body('title')
      .not().isEmpty().withMessage('Product title cannot be empty')
      .isLength({ min: 3 }).withMessage('Product title has to be atleast 3 characters'), 
    body('currentPrice')
      .not().isEmpty().withMessage('Current price cannot be empty')
      .isNumeric().withMessage('Current price needs to be numeric'),
    body('mrp')
      .not().isEmpty().withMessage('MRPL cannot be empty')
      .isNumeric().withMessage('MRPL needs to be numeric'),
    body('imageURL')
      .not().isEmpty().withMessage('Image URL cannot be empty')
      .isURL().withMessage('Image URL is not valid'),
  ]
}

module.exports = ProductMiddleware