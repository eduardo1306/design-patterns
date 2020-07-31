interface ITransport {
  deliver(): Promise<void>;
}

class Truck implements ITransport {
  public async deliver(): Promise<void> {
    console.log('Deliver by the sea');
  }
}

class Boat implements ITransport {
  public async deliver(): Promise<void> {
    console.log('Deliver by the sea');
  }
}

class ShippingCompany {
  public static getTruck(): Truck {
    return new Truck();
  }

  public static getBoat(): Boat {
    return new Boat();
  }
}

let truck = ShippingCompany.getTruck().deliver();
let boat = ShippingCompany.getBoat().deliver();