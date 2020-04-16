const { kitties } = require('./datasets/kitties');
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { books } = require('./datasets/books');
const { weather } = require('./datasets/weather');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');

/* eslint-disable */
/* stylelint-disable */




// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {

    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']
    const result = kitties
      .filter(kitty => kitty.color === 'orange')
      .map(kitten => kitten.name);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByAge() {
    // Sort the kitties by their age

    const result = kitties.sort((a, b) => b.age - a.age);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    const result = kitties
      .map(kitty => {
        kitty.age += 2;
        return kitty
        })
    return result;
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    const result = clubs.reduce((acc, club) => {
      club.members.forEach(name => {
        if(!acc[name]) {
          acc[name] = []
        }
        acc[name].push(club.club)
      })
      return acc
    }, {});

    return result;

    // Annotation:
    //I originally did it with two forEach methods but for this to work I needed to create a variable and set that equal to an empty object {} and push into that, then return that, but that doesn't seem like it would work for this format, so I switched to the reduce and forEach
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    const result = mods.map(mod => {
      let newData = {}
      newData.mod = mod.mod,
      newData.studentsPerInstructor = mod.students / mod.instructors
      return newData
    })
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    const result = cakes.reduce((acc, cake) => {
      let cakeStock = {};
      cakeStock['flavor'] = cake.cakeFlavor;
      cakeStock['inStock'] = cake.inStock;
      acc.push(cakeStock)
      return acc;
    }, [])
    return result;

    // Annotation:
    // input: array of objects
    // output: array of objects (same #)
    // new array of just the flavor and in stock
    // iterate over array and for each cake that we are reviewing, I want to take the flavor and create a new key value pair with the old value, and take the cake's instock value pair as well
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    const result = cakes.filter(cake => cake.inStock > 0);
    return result;

    // Annotation:
    // I want to review each cake in the cakes array and only return the objects that have an inStock value greater than 0
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    const result = cakes.reduce((acc, cake) => {
      acc += cake.inStock;
      return acc;
    }, 0)
    return result;

    // Annotation:
    // review each cake and add their inStock value to a counter to return
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    const result = cakes.reduce((acc, cake) => {
      cake.toppings.forEach(topping => {
        if (!acc.includes(topping)) {
          acc.push(topping)
        }
      })
      return acc;
    }, []);
    return result;

    // Annotation:
    // input: array of objects
    // output: array of strings
    // review each cake in the array
    // for each cake, I want to review it's toppings
    // if the topping is unique, add it to the array, but if it's not, then don't
    // return the final array of unique toppings
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    const result = cakes.reduce((acc, cake) => {
      cake.toppings.forEach(topping => {
        if (!acc[topping]) {
          acc[topping] = 1;
        } else {
          acc[topping] += 1;
        }
      })
      return acc;
    }, {});
    return result;

    // Annotation:
    // input: array of objects
    // output: object
    // need to make a grocery list for each ingredient (key) with a value being the number of times that ingredient is listed for each cake
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    const result = classrooms.filter(room => room.program === 'FE');
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    const result = classrooms.reduce((obj, room) => {
      obj['feCapacity'] = 0;
      obj['beCapacity'] = 0;
      if (room.program === 'FE') {
        obj['feCapacity'] += room.capacity
      } else if (room.program === 'BE') {
        obj['beCapacity'] += room.capacity
      }
      return obj
    }, {})
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = classrooms.sort((a, b) => a.capacity - b.capacity)
    return result;

    // Annotation:
    // we have an array of objects
    // return a sorted version of this array, which is sorted based on each object's capacity value
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence() {
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']


    const result = books.reduce((acc, book) => {
        if (book.genre !== 'Horror' && book.genre !== 'True Crime') {
          console.log(book.genre)
          acc.push(book.title)
        }
        return acc
      }, [])
    return result;

    // Annotation:
    // Write your annotation here as a comment

  },
  getNewBooks() {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    const result = books.reduce((acc, book) => {
      let newBooks = {};
      if(book.published >= 1990) {
        newBooks.title = book.title
        newBooks.year = book.published
        acc.push(newBooks)
      }
      return acc;
    }, []);
    return result;

    // Annotation:
    // what we want back is an array of objects
    // each object represents a book
    // it has two key value pairs - one for title and the other for year
    // we want to iterate over the books array
    // and for each book, if the published year is >= 1990, then add it to the new array
  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    const result = weather.map(city => {
      let total = city.temperature.high + city.temperature.low
      let average = total / 2
      return average
    })
    return result;

    // Annotation:
    // inut: array of objects
    // output: array
    // weather has temperature property
    // the temperature property value is an object with two key value pairs that I need to add together and divide by 2 to get the average
    // this result will be pushed into my new array and returned

  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    const result = weather.reduce((acc, city) => {
      if (city.type.includes('sunny')) {
        acc.push(`${city.location} is ${city.type}.`)
      }
      return acc;
    }, []);
    return result;

    // Annotation:
    // Input: array of objects
    // Output: array of strings
    // we are looking for cities that have a type that includes the word sunny
    // if it does, then add the name and type into a string
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    const result = weather.sort((a, b) => b.humidity - a.humidity)[0]
    return result;

    // Annotation:
    // an array of objects
    // need to return just one object
    // this one object will be the object from the original array which has the highest humidity

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]


    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    const result = instructors.reduce((acc, instructor) => {
      let instDetail = {};
      instDetail.name = instructor.name;
      cohorts.forEach(cohort => {
        if(cohort.module === instructor.module) {
          instDetail.studentCount = cohort.studentCount
        }
      })
      acc.push(instDetail);
      return acc;
    }, [])
    return result;

    // Annotation:
    // need to return a NEW array of objects
    // each object is for one instructor, and has the properties of name (from the instructors dataset) and studentCount (from the cohorts dataset)
    // need to first iterate over the instrctors array to get the name to add to the new object
    // then need to iterate over the cohorts array and check if the instrutor's module matches the module in the cohorts array and then take that matching module's studentCount and add to new object
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    const result = cohorts.reduce((acc, mod) => {
      let number = `cohort${mod.cohort}`
      acc[number] = 0;
      let counter = 0;
      instructors.forEach(instructor => {
        if(instructor.module === mod.module) {
          counter++
        }
      })
      acc[number] = (mod.studentCount / counter)
      return acc
    }, {});
    return result;

    // Annotation:
    // need to create and return a new object
    // first iterate over cohorts dataset
    // one key value pair
    // key is cohorts.cohort value
    // then iterate over instructors dataset
    // create an instructor counter
    // if instructor.module equals cohort.module then add to instructor counter
    // then take cohort.studentCount and divide that by instructor counter and assign that to be the value of the key
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    const result = instructors.reduce((acc, instructor) => {
      acc[instructor.name] = [];
      cohorts.forEach(cohort => {
        cohort.curriculum.forEach(curr => {
          if(instructor.teaches.includes(curr)) {
            if(!acc[instructor.name].includes(cohort.module)) {
            acc[instructor.name].push(cohort.module)
            }
          }
        })
      })
      return acc
    }, {})
    return result;

    // Annotation:
    // two data files
    // instructors has names
    // reduce object key name (loop through inst) value is adding an array based on the curriculum
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    const result = cohorts.reduce((acc, cohort) => {
      cohort.curriculum.forEach(curr => {
        if(!acc[curr]) {
          acc[curr] = [];
        }
        instructors.forEach(instructor => {
          instructor.teaches.forEach(topic => {
            if(curr === topic) {
              if(!acc[curr].includes(instructor.name)) {
              acc[curr].push(instructor.name)
              }
            }
          })
        })
      })
      return acc
    }, {})
    return result;

    // Annotation:
    // iterate over cohort curriculum
    // for each string in that array, set it as the key name but check to make sure that it doesn't exist already
    // then iterate over the instructors and teaches to check if teaches string matches cohort curriculum
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]
    let bossNames = Object.keys(bosses);

    const result = 'result';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]

    const result = Object.keys(constellations).reduce((acc, constellation) => {
      constellations[constellation].stars.forEach(constStar => {
        stars.forEach(star => {
          if(star.name === constStar) {
            acc.push(star)
          }
        })
      })
      return acc;
    }, [])
    return result;

    // Annotation:
    // we have an object and an array of objects
    // return an array of stars that appear in any of the constellations listed in the constellations object
    // need to check and see if the stars in the stars array are included in the constellations object
    // iterate over the stars to see if they are included in constellations
      // if stars.name is included in constellations.stars
    // if they are included we will need to add them to the final array
      // push to array that we will create
    // if they aren't, don't do anything because we don't need it
    // return an array of the star object that was found in the constellation
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    const result = stars.reduce((acc, star) => {
      if(!acc[star.color]) {
        acc[star.color] = [];
      }
      acc[star.color].push(star);
      return acc;
    }, {});
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.

    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    const weaponNames = Object.keys(weapons)

    const result = weaponNames.reduce((acc, weapon) => {
      characters.forEach(character => {
        character.weapons.forEach(tool => {
          if (tool === weapon) {
            acc += weapons[weapon].damage
          }
        })
      })
      return acc
    }, 0);
    return result;

    // Annotation:
    // check over the characters array of objects.
    // for each character's weapons, check that the weapon matches a weapon object. if it does add the weapon's damage property value to a running today
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}
    const weaponNames = Object.keys(weapons)

    const result = characters.reduce((acc, character) => {
      let charTotal = {};
      charTotal[character.name] = 0;
      let detailsObj = {};
      detailsObj['damage'] = 0;
      detailsObj['range'] = 0;
      character.weapons.forEach(tool => {
        weaponNames.forEach(weapon => {
          if(tool === weapon) {
            detailsObj['damage'] += weapons[weapon].damage;
            detailsObj['range'] += weapons[weapon].range;
          }
        })
        charTotal[character.name] = detailsObj;
      })
      acc.push(charTotal)
      return acc
    }, [])
    return result;

    // Annotation:
    // need to return an array of new objects
    // this array has a character's name as a property, with a value of an object that is the sum of their weapon's damage and range
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    const result = movies.reduce((acc, movie) => {
      acc[movie.title] = 0;
      movie.dinos.forEach(dino => {
        if (dinosaurs[dino].isAwesome) {
          acc[movie.title]++
        }
      })
      return acc
    }, {})
    return result;

    // Annotation:
    // going to look over the movies array
    // for each object in that array, we want to take the title and assign it as a new key name for our new object that we will be returning at the end
    // as we are looking at each movie, we want to look at the dinos property
    // since this is an array, we will be iterating over each string and checking it against the dinosaurs array
    // if there is a match, AND the dinosaur isAwesome (true) then add it to the value of the title property
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    const result = movies.reduce((acc, movie) => {
      let totalAge = 0;
      if (!acc[movie.director]) {
        acc[movie.director] = {};
      }
      if (!acc[movie.director].hasOwnProperty(movie.title)) {
        acc[movie.director][movie.title] = 0;
        movie.cast.forEach(person => {
          totalAge += movie.yearReleased -humans[person].yearBorn;
        })
      }
      let avgAge = Math.floor(totalAge / movie.cast.length)
      acc[movie.director][movie.title] = avgAge;
      return acc;
    }, {});
    return result;

    // Annotation:
    // iterate over the movies array and for each movie, set the director's name as a property in the new object that will be returned at the end
    // we are assigning the value to be a new object, which has a property of movie.title
    // we need to iterate over the cast array, and for a cast member, access the humans object with their name (humans[name].yearBorn) and we will need to subtract their yearBorn from movie.yearReleased and set that to be the value of the movie.title property
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts
};
