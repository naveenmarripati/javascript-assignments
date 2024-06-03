function Car(color, brand) {
    this.color = color;
    this.brand = brand;
    this.start = () => { //arrow but it refered  to object
      console.log(this);  // Car { }
    };
  }
  
  let car1 = new Car("blue", "Audi");
  car1.start();