import { INotification } from "./INotification";

export default class Notification implements INotification {
  public notify(): void {
    console.log('Notify my friends');
  }
}