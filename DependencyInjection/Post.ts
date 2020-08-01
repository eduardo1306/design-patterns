import { IPost } from "./IPost";
import Notification from "./Notification";


export default class Post implements IPost {
  constructor(private notification: Notification) {
  }
  public publish(text: string): void {
    console.log(text);
    this.notification.notify();
  }
}