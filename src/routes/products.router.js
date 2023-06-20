const { Router } = require('express')
const productManager = require('../dao/mongo/product.mongo.js')
const {getProducts, getProductById, addProduct, updateProduct, deleteProduct} = require('../controllers/products.controller.js')

const router = Router()

router.get('/', getProducts)

router.get('/:pid', getProductById)

router.post('/', addProduct)

router.put('/:pid', updateProduct)

router.delete('/:pid', deleteProduct)

module.exports = router