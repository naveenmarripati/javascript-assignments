let car = {
    color: "blue",
    brand: "Audi",
    start: function() {
      console.log(this);  // Object { color: "blue", brand: "Audi", start: ƒ() }
    }
  };
  
  car.start();

  function start() {
    console.log(this);  // Window { }
  }
  start();