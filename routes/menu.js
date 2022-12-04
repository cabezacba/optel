const { Router } = require('express');

const { menuGet, menuPut, menuPost, menuDelete, menuAllGet } = require('../controllers/menu.js')

const router = Router();
        
router.post('/add',menuPost);
router.delete('/delete/:id',menuDelete);
router.put('/update/:id',menuPut);
router.get('/all',menuAllGet);
router.get('/:id',menuGet);


module.exports = router;
