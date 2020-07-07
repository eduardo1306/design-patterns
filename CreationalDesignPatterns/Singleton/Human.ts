export class Human {
  height: number = 0;
  weight: number = 0;
  age: number = 0;

  constructor() {
    if(Human._instance) {
      throw new Error ('Cannot initialize singleton class using new!');
    }

    Human._instance = this;
  }

  private static _instance: Human = new Human();
  public static get instance(): Human {
    return Human._instance;
  }
}