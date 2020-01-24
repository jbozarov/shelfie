

module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db'); 

        db.get_inventory()
        .then(products => {
            res.status(200).send(products)
        })
        .catch(err=>{
            res.status(500).send('Error on get_all_products')
            console.log(err)
        })
    }, 
    create: (req, res) => {
        const db = req.app.get('db'); 
        const {name, price, imgurl} = req.body; 

        db.create_product([name, price, imgurl])
        .then(()=>{
            res.status(200).send('all good'); 

        })
        .catch(err=>{
            res.status(500).send('Error on create_product')
            console.log(err)
        })
    }, 
    delete: (req, res) => {
        const db = req.app.get('db'); 
        const {id} = req.params; 

        db.delete_product(id)
        .then(()=>{
            res.sendStatus(200)
        })
        .catch(err=>{
            res.status(500).send('Error on delete_product')
            console.log(err)
        })
    }, 
    oneProduct: (req, res) => {
        const db = req.app.get('db'); 
        const {id} = req.params; 

        db.get_one_product(id)
        .then(response=>{
            const data = response[0]
            res.status(200).send(data)
        })
    }, 
    update: (req, res) => {
        const db = req.app.get('db'); 
        const {id} = req.params; 
        const {name, price, imgurl} = req.body; 

        db.update_product([id, name, price, imgurl])
        .then(()=>{
            res.sendStatus(200)
        })
        .catch(err=>{
            res.status(500).send('Error on update_product')
            console.log(err)
        })
    }
}