const productManager = require('../dao/mongo/product.mongo')
const cartManager = require('../dao/mongo/cart.mongo')

class ViewsController {

    home = async (req, res) => {
        try {
            const { payload } = await productManager.getProducts(15)
            console.log(payload)
            const object = {
                style: 'index.css',
                title: 'Productos de la Tienda',
                user: req.session.user,
                products: payload,
            }
            res.render('home', object)
        } catch (error) {}
    }
    
    
    products = async (req, res) => {
        try {
            const { page } = req.query
            const { payload, hasPrevPage, hasNextPage, prevPage, nextPage, totalPages } = await productManager.getProducts(undefined, page)
            if (page && (page > totalPages || page <= 0 || !parseInt(page))) {
                return res.status(400).send({ status: 'error', error: 'No existe la página' })
            }
            const role = req.session.user?.role === 'admin' ? true : false
            const object = {
                style: 'index.css',
                title: 'Productos de la Tienda',
                products: payload,
                user: req.session.user,
                role: role,
                hasPrevPage,
                hasNextPage,
                prevPage,
                nextPage,
            };
            res.render('products', object)
        } catch (error) {}
    }
    
    
    carts = async (req, res) => {
        try {
            const { cid } = req.params
            const role = req.session.user?.role === 'admin' ? true : false
            const cart = await cartManager.getCartById(cid)
            const object = {
                style: 'index.css',
                title: 'Productos',
                user: req.session.user,
                role: role,
                products: cart.product,
                id: cart._id,
            };
            res.render('carts', object)
        } catch (error) {}
    }
    
    chat = async (req, res) => {
        try {
            const role = req.session.user?.role === 'admin' ? true : false
            res.render('chat', { style: 'index.css', user: req.session.user, role: role })
        } catch (error) {}
    }
    
    realTimeProducts = async (req, res) => {
        const { payload } = await productManager.getProducts(20)
        const object = {
            style: 'index.css',
            title: 'Realtime Products',
            user: req.session.user,
            products: payload,
        }
        res.render('realTimeProducts', object)
    }
    
    login = async (req, res) => {
        const object = {
            style: 'index.css',
            title: 'Login',
        }
        res.render('login', object)
    }
    
    registerForm = async (req, res) => {
        const object = {
            style: 'index.css',
            title: 'Register',
            user: req.session.user,
        }
        res.render('registerForm', object)
    }
    
    recoveryPassword = async (req, res) => {
        const object = {
            style: 'index.css',
            title: 'Recovery Password',
        }
        res.render('recoveryPassword', object);
    }
    
    profile = async (req, res) => {
        const object = {
            style: 'index.css',
            title: 'Login',
            user: req.session.user,
        }
        res.render('profile', object)
    }

}

module.exports = new ViewsController()