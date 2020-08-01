interface IPhone {
  useLightning(): void;
}

interface Android {
  useMicroUSB(): void;
}

class iPhone11 implements IPhone {
  useLightning(): void {
    console.log('using lightning port...');
  }
  
}

class Samsung implements Android {
  useMicroUSB(): void {
    console.log('using micro USB...')
  }
  
}

class LightningToMicroUSBAdapter implements Android {
  constructor(private iphone: IPhone){}
  useMicroUSB(): void {
    console.log('Want to use micro USB, converting to lightning...');
    this.iphone.useLightning();
  }
}