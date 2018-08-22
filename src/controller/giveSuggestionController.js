
const BabyName = require('../models/babySchema')

const logger = (req, res, next) =>{
    console.log(req.method + ' ' + req.path + ' - ' + req.ip);
    next(); 
    }

const giveSuggestion = (req, res) => {

  let nameBoy = req.body.nameBoy;
  let nameGirl = req.body.nameGirl;
  let guess = req.body.guess;
  let suggestedBy = req.body.suggestedBy;
  let age = req.body.age;
  let meaning = req.body.meaning;
  let reason = req.body.meaning;

  console.log(req.params);

  let suggestion = new BabyName({ nameBoy: nameBoy, nameGirl: nameGirl, 
    guess: guess, suggestedBy: suggestedBy, age: age,
    meaning: meaning, reason: reason });

  suggestion.save((err) => {
    if (err) 
      return res.json(err);
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
exports.giveSuggestion = giveSuggestion;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
