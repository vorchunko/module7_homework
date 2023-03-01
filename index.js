// Задание 1.
// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все 
// ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

const userEfimenko = {
    name: 'Vitaly',
    surname: 'Efimenko',
    age: 32,
    position: 'Junior',
};

function student (userEfimenko){
    for (let key in userEfimenko){
        if (userEfimenko.hasOwnProperty (key)){
            console.log (key + ": " + userEfimenko[key]);
        }
    }
}
student(userEfimenko);


// Задание 2.
// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли 
// у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

let obj = {
number1: 1,
number2: 2,
number3: 2,
number4: 2,
};
let str = "number9";

function search(obj, str) {
return str in obj;
}
console.log(search(obj, str));

// Задание 3.
// Написать функцию, которая создает пустой объект, но без прототипа.

function emptyObj() {
    return Object.create(null);
    }
emptyObj;
console.log (emptyObj());


// Задание 4.
// Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

function ElectricalDevices (weight, color, power){
  this.portability = "portable",
  this.weight = weight,
  this.color = color,
  this.power = power,
  this.on = false
 };
ElectricalDevices.prototype.turnOn = function(){
    this.on = true
};
ElectricalDevices.prototype.turnOff = function(){
    this.on = false
};

const notebook = new ElectricalDevices ("2kg", "black", 500)
console.log (notebook);
const lamp = new ElectricalDevices ("700gr", "white", 70)
console.log (lamp);

function AccessoryElectricalDevices (weight, color, battery, power){
  this.portability = "portable"
  this.weight = weight,
  this.color = color,
  this.battery = battery
}

AccessoryElectricalDevices.prototype = new ElectricalDevices()

AccessoryElectricalDevices.prototype.power = function(power){
    console.log (`Power is ${power} mAh`)}

const mouse = new AccessoryElectricalDevices ("300gr", "black", "battery 2600 mAh",)
mouse.power(40)
console.log (mouse);

lamp.turnOn();
notebook.turnOn();

let totalPower = 0;

const devices = [lamp, notebook];


devices.forEach(device => {
  if (device.power > 0)
  totalPower += device.power
});

console.log(` Расход энергии от сети в данное время: ${totalPower} watts`);

// Задание 5
// Переписать консольное приложение из предыдущего юнита на классы.

class ElectricalDevices {
    constructor (weight, color, power){
    this.portability = "portable";
    this.weight = weight;
    this.color = color;
    this.power = power;
    this.on = false;
   }
  turnOn(){
      this.on = true
  };
  turnOff(){
      this.on = false
  }
  }
  
  class AccessoryElectricalDevices extends ElectricalDevices  {
    constructor (weight, color, battery, power){
    super (weight, color, power);
    this.battery = battery
  }
    getPower() {
    console.log (`Power is ${this.power} mAh`)}
  }
  
  const notebook = new ElectricalDevices ("2kg", "black", 500)
  console.log (notebook);
  const lamp = new ElectricalDevices ("700gr", "white", 70)
  console.log (lamp);
  
  const mouse = new AccessoryElectricalDevices ("300gr", "black", "battery 2600 mAh", 40)
  mouse.getPower()
  console.log (mouse);
  
  lamp.turnOn();
  notebook.turnOn();
  
  let totalPower = 0;
  
  const devices = [lamp, notebook];
  
  
  devices.forEach(device => {
    if (device.power > 0)
    totalPower += device.power
  });
  
  console.log(` Расход энергии от сети в данное время: ${totalPower} watts`);