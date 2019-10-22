const router = require('express').Router();
const bookctrl = require('../controllers/book');

router.get('/books',bookctrl.books);
router.post('/upload',bookctrl.upload);
router.delete('/delete/:id',bookctrl.delete);
router.get('/getbooks',bookctrl.getPage)
router.put('/update/:id',bookctrl.update);
//     console.log("ist run here");
//     // let id = req.params.id;
//     // let book = req.body
//     console.log(req.params.id);
//     console.log(req.body);
// });

module.exports = router;