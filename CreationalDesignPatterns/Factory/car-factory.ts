import { CarOptions } from './car-options'

export class FordFactory {
  public static getFusion(): CarOptions {
    let fusion: CarOptions;    
    fusion = {
      power: 207,
      hybrid: true,
      automatic: true,
      airBag: true,     
      price: 180000,         
    }
    
    return fusion;
  }

  public static getFiesta(): CarOptions {
    let fiesta: CarOptions;
    fiesta = {
      power: 155,
      hybrid: false,
      automatic: true,
      airBag: true,
      price: 88000,
    }
    return fiesta;
  }
}