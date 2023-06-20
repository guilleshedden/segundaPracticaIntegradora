const { Router } = require('express')
// const { ProductManager } = require('../dao/fileSystem/productManager')
// const path = './src/archivos/products.json'
// const manager = new ProductManager(path)
// const productManager = require('../dao/mongo/product.mongo')
// const cartManager = require('../dao/mongo/cart.mongo')
const { loged } = require('../middlewares/loged.middleware.js')
const { notLoged } = require('../middlewares/notLoged.middleware.js')
const { auth } = require('../middlewares/authentication.middleware.js')
const { home, products, carts, chat, realTimeProducts, login, registerForm, recoveryPassword, profile } = require('../controllers/views.controller.js')
const router = Router()

router.get('/', notLoged, home)

router.get('/products', products)

router.get('/carts/:cid', notLoged, auth, carts)

router.get('/chat', notLoged, chat)

router.get('/realTimeProducts', notLoged, realTimeProducts)

router.get('/login', loged, login)

router.get('/register', loged, registerForm)

router.get('/recoveryPassword', loged, recoveryPassword)

router.get('/profile', notLoged, profile)

module.exports = router