const router = require('express-promise-router')();
const mongojs = require('mongojs');
const db2 = mongojs('mongodb://raul:00025416ad712ecb@ds141633.mlab.com:41633/proyectofep', ['sale']);


//rutas para users

// Single sale
router.get('/sale', (req, res, next) => {
    db2.sale.find((err, tasks) => {
        if (err) return next(err);
        res.json(tasks);
    });
});

router.get('/sale/:restaurant', (req, res, next) => {
    db2.sale.find({restaurant:req.params.restaurant},(err, tasks) => {
        if (err) return next(err);
        res.json(tasks);
    });
});

router.get('/sale/:client', (req, res, next) => {
    db2.sale.find({client:req.params.client},(err, tasks) => {
        if (err) return next(err);
        res.json(tasks);
    });
});

// Add a sale
router.post('/sale', (req, res, next) => {
    const users = req.body;
        db2.sale.save(users, (err, user) => {
            if (err) return next(err);
            res.json(user);
        });
});


// Delete user
router.delete('/sale/:id', (req, res, next) => {
    db2.sale.remove({_id: mongojs.ObjectId(req.params.id)}, (err, user) => {
        if(err){ res.send(err); }
        res.json(user);
    });
});

// Update Task
router.put('/sale/:id', (req, res, next) => {
    let updateSale = {};
    if(!updateTask) {
        res.status(400);
        res.json({'error': 'bad request'});
    } else {
        db.sale.update({_id: mongojs.ObjectId(req.params.id)}, updateSale, {}, (err, task) => {
            if (err) return next(err);
            res.json(task);
        });
    }
});


module.exports = router;
