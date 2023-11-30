// Parent object for Automobile

var AutomobilePrototype = 
{
  start()
  {
    return "Engine Started";
  },

  stop()
  {
    return "Engine Stopped";
  }
};

var fourWheeler = Object.create(AutomobilePrototype);

fourWheeler.wheels = 4;
fourWheeler.drive = function()
{
  return "Four-Wheeler is Being Driven";
};

console.log(fourWheeler.start()); 
console.log(fourWheeler.drive()); 
console.log(fourWheeler.stop()); 
console.log(fourWheeler.wheels);


// Parent Constructor function for Automobile

function Automobile() {}

Automobile.prototype.start = function() 
{
  return "Engine Started";
};

Automobile.prototype.stop = function()
{
  return "Engine Stopped";
};

function FourWheeler()
{
  Automobile.call(this);
  this.wheels = 4;
}

FourWheeler.prototype = Object.create(Automobile.prototype);
FourWheeler.prototype.constructor = FourWheeler;

FourWheeler.prototype.drive = function()
{
  return "Four-Wheeler is Being Driven";
};

var myFourWheeler = new FourWheeler();

console.log(myFourWheeler.start()); 
console.log(myFourWheeler.drive()); 
console.log(myFourWheeler.stop()); 
console.log(myFourWheeler.wheels); 
