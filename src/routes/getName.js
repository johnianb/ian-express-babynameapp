//init for getName
const express = require('express');
const getName = express();
const bodyParser = require('body-parser');

const createSuggestionController = require('../controller/createSuggestionController');

const port = process.env.PORT || 8080;

getName.use(logger);
getName.use(bodyParser.urlencoded({ extended: false }))
getName.use(bodyParser.json());

getName.get('/addNameaa', createSuggestionController.createAndSaveSuggestion);

getName.get('/try', createSuggestionController.trythis);

getName.get('/:babyname/echo', createSuggestionController.backtry);

getName.post('/addName', createSuggestionController.askForName);

// listen for requests :)
var listener = getName.listen(port, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
