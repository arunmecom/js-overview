class Car {
    constructor(name, year){
        this.name = name;
        this.year =year
    }

    story() {
       console.log('this car name is', name, 'and its made in ' year)
    }
}

var ford = new Car('Ford', '1980');
ford.story();
