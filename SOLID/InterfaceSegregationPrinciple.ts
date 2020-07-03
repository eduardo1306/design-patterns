interface ISmartDevice {
  call: (contact: string) => void;
  sendSms: (contact: string, message: string) => void;
  openApp: (application: string) => void;
  connectWifi: (ssid: string, password: string) => void;
}

class IPhone implements ISmartDevice {
  public call (contact: string): void {
    console.log(`Calling to ${contact}`);
  };
  public sendSms (contact: string, message: string) {
    console.log(`Send to ${contact}: ${message}`);
  };
  public openApp (application: string): void {
    console.log(`Open ${application}`);
  }
  public connectWifi (ssid: string, password: string): void {
    console.log(`connect on Wifi with login ${ssid} and that password ${password}`);
  }
}

class Tablet implements ISmartDevice {
  public call (contact: string): void {
    throw new Error('Tablet cannot call for other devices!');
  };
  public sendSms (contact: string, message: string) {
    throw new Error('Tablet cannot send messages for other devices!');
  };
  public openApp (application: string): void {
    console.log(`Open ${application}`);
  }
  public connectWifi (ssid: string, password: string): void {
    console.log(`connect on Wifi with login ${ssid} and that password ${password}`);
  }
}

let iPhone = new IPhone();
let tablet = new Tablet();

iPhone.call('John'); // Working as well
iPhone.connectWifi('MyWorkWiFi', 'MySuperStrongPassword'); // Working as well
iPhone.openApp('Facebook'); // Working as well
iPhone.sendSms('John', 'Hey! How are you?!'); // Working as well

tablet.call('John'); // Ops! We have an error! Violation of that principle
tablet.connectWifi('MyWorkWiFi', 'MySuperStrongPassword'); // Working as well
tablet.openApp('Facebook'); // Working as well
tablet.sendSms('John', 'Hey! How are you?!'); // Ops! We have an error! Violation of that principle