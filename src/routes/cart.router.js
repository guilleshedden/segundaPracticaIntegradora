const { Router } = require('express')
// const cartManager = require('../dao/mongo/cart.mongo')
// const productManager = require('../dao/mongo/product.mongo.js')
// const { verifyCid, verifyPid } = require('../utils/cartValidator')

const { 
    createCart, 
    addProduct, 
    getCart, 
    deleteProduct, 
    deleteProducts, 
    updateProducts, 
    updateProduct 
} = require('../controllers/carts.controller')

const router = Router()

router.post('/', createCart)

router.post('/:cid/product/:pid', addProduct)

router.get('/:cid', getCart)

router.delete('/:cid/product/:pid', deleteProduct)

router.delete('/:cid', deleteProducts)

router.put('/:cid', updateProducts)

router.put('/:cid/product/:pid', updateProduct)

module.exports = router