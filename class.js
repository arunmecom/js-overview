// create a class
class Car {
    constructor(name, year){
        this.name = name;
        this.year =year
    }
    story() {
       console.log('this car name is', this.name, 'and its made in ', this.year)
    }
}

var ford = new Car('Ford', '1980');
ford.story();
