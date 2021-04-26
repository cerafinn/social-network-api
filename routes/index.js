const router = require('express').Router();
const htmlRoutes = require('./html/html-routes');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).send('An Error Occurred');
});

module.exports = router;