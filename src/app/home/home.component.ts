import { Component } from "@angular/core";
import { Message } from "../components/models/message";
import * as fromStore from '../components/store';
import { Store } from "@ngrx/store";
import { ToastState } from "../components/store/reducers/toast.reducer";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {
  constructor(private store: Store<ToastState>) {}

  triggerMessage(messageType) {
    const message = this.getMessageObject(messageType);
    this.store.dispatch(new fromStore.DisplayMessage(message));
  }

  getMessageObject(messageType) {
    let message: Message = {
      content: "",
      style: ""
    };

    switch (messageType) {
      case "info":
        message.content = "This is an info message!";
        message.style = messageType;
        break;
      case "success":
        message.content = "This is a success message!";
        message.style = messageType;
        break;
      case "danger":
        message.content = "This is an error message!";
        message.style = messageType;
        break;
    }
    return message;
  }
}
