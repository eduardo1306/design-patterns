class Duck {
  public quack(): void {
    console.log('quack quack!');
  }
}

class EletronicDuck extends Duck {
  private _battery: string;
  public quack(battery: string): void {
    // There is a error, because we have an abstract error! 
    // Doesn't always seems like what we think...
  }
}