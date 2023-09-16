//creates route
const routes = require('express').Router();

const newController = require('../controllers');
/*annonymous func
routes.get('/', (req, res, next) => {
    res.json('Is awesome!');
});*/

/** you can name the function and call it like this: 
 * const newFunction = (req, res, next) => {
 * res.json('New message')
 * };
*/

//call function
routes.get('/', newController.newFunction);
routes.get('/secondfunction', newController.secondFunction);

//for const called routes
module.exports = routes;