
const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI)
  .then(connection => {
    console.log('Connected to MongoDB')
  })
  .catch(error => {
    console.log(error.message)
  })

const logger = (req, res, next) =>{
    console.log(req.method + ' ' + req.path + ' - ' + req.ip);
    next(); 
    }

//SCHEMA

const Schema = mongoose.Schema;

  const babySchema = new Schema({
    name:  { type: String,
      required: true},
    age: Number,
    meaning: String,
    reason: String
  });

// Model
let BabyName = mongoose.model('BabyName', babySchema);

// const done = () => {
//   console.log('error')
// }

const askForName = (req, res) => {

  let suggestedName = req.body.suggestedName;
  let age = req.body.age;
  // res.send(req.params.version);
  console.log(req.params);

  let suggestion = new BabyName({ name: suggestedName, age: age,
    meaning: 'God\'s messenger', reason: 'dad\'s name' });

  suggestion.save((err) => {
    if (err) return console.log(err);
    else {
      return res.json(suggestion)
    }
  });

}

const createAndSaveSuggestion = (req, res) => {
  
  let suggestedName = req.param('suggestedName');
  let age = req.param('age');

  let suggestion = new BabyName({ name: suggestedName, age: age,
    meaning: 'God\'s messenger', reason: 'dad\'s name' });
  // suggestion.save((err, data) => (err ? (err) : done(null, data)));
  suggestion.save((err) => {
    if (err) return console.log(err);
    else {
      return res.json(suggestion)
    }
  });
}

/** 4) Create many People with `Model.create()` */

var createManyPeople = function(arrayOfPeople, done) {
    
    done(null/*, data*/);
    
};

/** # C[R]UD part II - READ #
/*  ========================= */

/** 5) Use `Model.find()` */


var findPeopleByName = function(personName, done) {
  
  done(null/*, data*/);

};

/** 6) Use `Model.findOne()` */

var findOneByFood = function(food, done) {

  done(null/*, data*/);
  
};

/** 7) Use `Model.findById()` */

var findPersonById = function(personId, done) {
  
  done(null/*, data*/);
  
};

/** # CR[U]D part III - UPDATE # 
/*  ============================ */

/** 8) Classic Update : Find, Edit then Save */

var findEditThenSave = function(personId, done) {
  var foodToAdd = 'hamburger';
  
  done(null/*, data*/);
};

/** 9) New Update : Use `findOneAndUpdate()` */

var findAndUpdate = function(personName, done) {
  var ageToSet = 20;

  done(null/*, data*/);
};

/** # CRU[D] part IV - DELETE #
/*  =========================== */

/** 10) Delete one Person */

var removeById = function(personId, done) {
  
  done(null/*, data*/);
    
};

/** 11) Delete many People */

var removeManyPeople = function(done) {
  var nameToRemove = "Mary";

  done(null/*, data*/);
};

/** # C[R]UD part V -  More about Queries # 
/*  ======================================= */

/** 12) Chain Query helpers */

var queryChain = function(done) {
  var foodToSearch = "burrito";
  
  done(null/*, data*/);
};

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.logger = logger;
exports.BabyName = BabyName;
exports.createAndSaveSuggestion = createAndSaveSuggestion;
exports.askForName = askForName;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
