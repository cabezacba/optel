
const { Router } = require('express');

const { userGet, userPut, userPost, userDelete, userMenuGet, userAllGet } = require('../controllers/user.js')

const router = Router();


router.post('/add/',userPost);        
router.delete('/delete/:id',userDelete);
router.put('/update/:id',userPut);
router.get('/:id',userGet);
router.get('/:id/menus',userMenuGet);
router.get('/all/',userAllGet);





module.exports = router;
