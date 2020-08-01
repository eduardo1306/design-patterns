abstract class Car {
  public description: string;

  public getDescription(): string {
    return this.description;
  };

  public abstract cost(): number;
}

class Renegade extends Car {
  public description = 'Reneage';
  public cost(): number {
    return 8800;
  }

}

class Troller extends Car {
  public description = 'Troller 4x4'
  public cost(): number {
    return 14000;
  }  
}

abstract class CarOptions extends Car {
  decoratedCar: Car;
  public abstract getDescription(): string;
  public abstract cost(): number;
}

class LeatherSeat extends CarOptions {  
  constructor(public car: Car){
    super();
    this.decoratedCar = car;
  }

  public getDescription(): string {
    return this.decoratedCar.getDescription() + ' with leather seat!';
  }
  public cost(): number {
    return this.decoratedCar.cost() + 100;
  }  
}

let renegade = new Renegade();
let troller = new Troller();
renegade = new LeatherSeat(renegade);
troller = new LeatherSeat(troller);