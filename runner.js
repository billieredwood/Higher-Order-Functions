const ScranAdvisor = require("./ScranAdvisor");
const restaurants = require("./restaurants.json");

const scranAdvisor = new ScranAdvisor(restaurants);


//1.    can count the number of restaurants:
console.log(scranAdvisor.totalRestaurants(restaurants));
// ✅   terminal command 'node runner.js' loads: 23.

//2.    can find a restaurant by full name:
// console.log(scranAdvisor.findByName("The Brunch Club"));
// ✅   terminal command 'node runner.js' loads: The Brunch Club.


//3.    can display an array containing the name of all restaurants:
// console.log(scranAdvisor.findAllNames(restaurants));
// ✅   returns full list of all names.

//4.    can find all restaurants from a given city:
//console.log(scranAdvisor.findRestaurantByCity("Glasgow"));
// ✅   terminal command 'node runner.js' loads the following 4 items: Oro, Halloumi South, The Brunch Club, Nippon Kitchen.






