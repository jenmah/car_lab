function Car(make, model, year, color){
  this.year = year;
  this.state = 'off';
  this.previousOwners = [];
  this.currentOwner = 'Manufacturer';
  this.passengers = [];
  this.color = '';
  this.parked = 'yes';
}

Car.prototype.sale = function(newOwner){
  this.previousOwners.push(this.currentOwner);
  this.currentOwner = 'Charlie';
};

Car.prototype.paint = function(newColor){
  this.color = 'Blue';
};

Car.prototype.start = function(state){
  this.state = 'on';
};

Car.prototype.off = function(state){
  this.state = 'off';
};

Car.prototype.pickUp = function(passenger){
    if (this.state === 'on') {
        this.passengers.push(passenger);
    } else if (this.state === 'off') {
        this.passengers = [];
    }
}

Car.prototype.dropOff = function(passenger){
    if (this.state === 'off') {
        this.passengers.push(passenger);
    } else if (this.state === 'on') {
        this.passengers.splice(passenger);
    }
}

Car.prototype.parkedCar = function(parked){
    if (this.parked === 'yes') {
        this.state = 'off';
    } else if (this.parked === 'no') {
        this.state = 'on';
    }
}

module.exports=Car;
