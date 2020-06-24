class Jeep {   
  public price = 100000;
  public cost():number {
    return this.price;
  }

  public break() {
    console.log('You braked!');
  }
}

class JeepWithAutoPilot extends Jeep {
  public price = 10000;
  private autopilot = false;  

  public cost(): number {
    return this.price;
  }  

  public handleAutoPilot(): void {
    if(!this.autopilot) {
      console.log('Autopilot on!')
      this.autopilot = true;
    } else {
      console.log('Autopilot off!')
      this.autopilot = false;
    }    
  }  
}

