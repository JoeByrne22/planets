const planetController = require('../controllers/planetController');
const router = require('express').Router();
const authController = require('../controllers/authController');

//Register Route
router.get('/register', authController.registerFormRoute);
router.post('/register', authController.registerRoute);

//Login Route
router.get('/login',authController.loginFormRoute);
router.post('/login',authController.loginRoute);

router.get('/', function(req, res) {
  res.render('home'); 
});

// Load the about page
router.get('/about', function(req, res) {
  res.render('about');
});

// INDEX Route
router.get('/planets', planetController.indexRoute);

//New Route
router.get('/planets/new', planetController.newRoute);

// Listen for POST requests to /planets
router.post('/planets', planetController.createRoute);

// SHOW Route
router.get('/planets/:id', planetController.showRoute);

// UPDATE route
router.put('/planets/:id', planetController.updateRoute);

// EDIT route
router.get('/planets/:id/edit', planetController.editRoute);

// DELETE Route
router.delete('/planets/:id', planetController.deleteRoute);



module.exports = router;
