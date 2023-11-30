function Vehicle(brand,model,speed,fuelType)
{
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.fuelType = fuelType;
}

Vehicle.prototype.accelerate = function()
{
    this.speed += 20;
    console.log("Your Vehicle Speed",this.speed);
}

Vehicle.prototype.brake = function()
{
    this.speed -= 20;
    console.log("Your Vehicle Speed",this.speed);
}

Vehicle.prototype.refuel = function()
{
    console.log("Your Vehicle is Refueling");
}

function Car(brand,model,speed,fuelType,NoOfWheels)
{
    Vehicle.call(this,brand,model,speed,fuelType)
    this.NoOfWheels = NoOfWheels;
}

Object.setPrototypeOf(Car.prototype,Vehicle.prototype);

var car1 = new Car("TaTa","Hector",0,"Petrol",4);
var car2 = new Car("Mahindra","Creta",0,"Petrol",4);
var car3 = new Car("TaTa","Bleno",0,"Diesel",4);
var car4 = new Car("Mahindra","Fortuner",0,"Petrol",4);
var car5 = new Car("Birla","KIA",0,"Diesel",4);
console.log(car1,car2,car3,car4,car5);

car1.accelerate();
car1.brake();
car1.refuel();

function Airplane(brand,model,speed,fuelType,NoOfWheels,numberOfEngines,hasLandingGear)
{
    Vehicle.call(this,brand,model,speed,fuelType)
    this.numberOfEngines = numberOfEngines;
    this.hasLandingGear = true;
    this.NoOfWheels = NoOfWheels;
}

Object.setPrototypeOf(Airplane.prototype,Vehicle.prototype);

Airplane.prototype.TakeOff = function()
{
    console.log(this.model,"AirPlane is Taking Off");
}

var airplane1 = new Airplane("TaTa","indigo",0,"Petrol",5,2,);
console.log(airplane1);

airplane1.TakeOff();