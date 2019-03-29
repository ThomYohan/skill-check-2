let id = 1
let product = [
    {
        product_id: id++,
        name: "wee",
        price: 21,
        imageUrl: "https://cdn.myanimelist.net/images/characters/2/300539.jpg"
    },
    {
        product_id: id++,
        name: "woo",
        price: 777,
        imageUrl: "https://i.ytimg.com/vi/DBvEmxtlaNY/hqdefault.jpg"
    }
]

module.exports = {
    create: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { name, price, imageUrl } = req.body

        dbInstance.createProduct([ name, price, imageUrl ])
            .then( () => res.sendStatus(200))
            .catch( err => {
                res.status(500).send({errorMessage: 'error in your create(controller.js)'})
            })
    },
    getOne: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { id } = req.params

        dbInstance.read_product(id)
            .then( product => res.status(200).send(product))
            .catch( err => {
                res.status(500).send({errorMessage: 'error in your getOne(controller.js)'})
            })
    },
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db')

        dbInstance.read_products()
            .then( products => res.status(200).send(products))
            .catch( err => {
                res.status(500).send({errorMessage: 'error in getAll(controller.js)'})
            })
    },
    update: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { params, query } = req

        dbInstance.updateProduct([ params.id, query.desc ])
            .then( () => res.sendStatus(200))
            .catch( err => {
                res.status(500).send({errorMessage: 'error in your update(controller.js)'})
            })
    },
    delete: ( req, res, next) => {
        const dbInstance = req.app.get('db')
        const { id } = req.params

        dbInstance.deleteProduct(id)
            .then( () => res.sendStatus(200))
            .catch( err => {
                res.status(500).send({errorMessage: 'error in your delete(controller.js)'})
            })
    }
}