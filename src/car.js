function Car(make, model, year, color, off){
  this.year = year;
  this.state = 'off';
}

Car.prototype.sale = function(newOwner){

};

Car.prototype.paint = function(newColor){

};


module.exports=Car;