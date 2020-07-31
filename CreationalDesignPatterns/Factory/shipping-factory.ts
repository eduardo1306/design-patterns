import { ITransport } from './shipping-options'

class Truck implements ITransport {
  public deliver(): void {
    console.log("Shipping by the road!");
  }
  
}

class Boat implements ITransport {
  public deliver(): void {
    console.log("Shipping by the sea!");
  }

}

export class ShippingCompany {
  static getTruck(): Truck {
    return new Truck();
  }

  static getBoat(): Boat {
    return new Boat();
  }
}