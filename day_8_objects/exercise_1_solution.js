let dog = {};
dog.name = "Bluese";
dog.legs = 4;
dog.color = "Browm";
dog.age = 3
dog.bark = function () { return "woof woof" };
dog.breed = "Deshi";
dog.getDogInfo = function () {
    return `My Dog name is ${this.name} his breed is ${this.breed} he is ${this.age} years old! He barks like ${this.bark()}`;
}

console.log(dog.getDogInfo());