const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}

// Add methods to prototype



//count the number of restaurants
ScranAdvisor.prototype.totalRestaurants = function () {
    return this.restaurants.length
}

// can find the name of restaurant by name
ScranAdvisor.prototype.findByName = function (name) {
    return this.restaurants.find(restaurant => restaurant.name === name);
}

// can find the name of all restaurants
ScranAdvisor.prototype.findAllNames = function (name) {
    return this.restaurants.map(restaurant => restaurant.name);
}

//can find all restaurants from Glasgow
ScranAdvisor.prototype.findRestaurantByCity = function (town) {
    return this.restaurants.filter(restaurant => restaurant.location.town === "Glasgow");
}




module.exports = ScranAdvisor;