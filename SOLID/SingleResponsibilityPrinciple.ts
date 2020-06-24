const wrongWay = () => {

  function addToast(msg: string) {
    // CREATE A TOAST AND SHOW A MESSAGE ON APPLICATION
  }

  class MessageBox {  
    public show (msg:string) {    
      addToast(msg);
    };
  }

  try {
    // SOMETHING
  } catch(err) {
    console.error('That employeer already exists.');
    let messageBox = new MessageBox();
    messageBox.show('That employeer already exists.');
  }
}

const rightWay = () => {
  function addToast(msg: string) {
    // CREATE A TOAST AND SHOW A MESSAGE ON APPLICATION
  }

  class MessageBox {  
    public show (msg:string) {    
      addToast(msg);
    };
  }

  function handleError(err, msg: string) {
    console.error(msg);
    let messageBox = new MessageBox();
    messageBox.show(msg);
  }

  try {
    // SOMETHING
  } catch(err) {
    handleError(err, 'That employeer already exists.')
  }
}