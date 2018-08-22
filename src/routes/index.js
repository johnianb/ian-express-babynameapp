
const express = require('express');
const getName = express();
const bodyParser = require('body-parser');

const createSuggestionController = require('../controller/giveSuggestionController');

const port = process.env.PORT || 8080;

getName.use(createSuggestionController.logger);
getName.use(bodyParser.urlencoded({ extended: false }))
getName.use(bodyParser.json());

getName.post('/giveSuggestion', createSuggestionController.giveSuggestion);

// listen for requests :)
var listener = getName.listen(port, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
