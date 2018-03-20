import {HubConnection} from "@aspnet/signalr";

import { API_ALERT_HUB_URL } from "../constants/apiConstants";
import { receiveAlert} from "../actions/alertActions"


export default class SignalrService {
  constructor(store) {
    console.log('starting signalrService');
    let connection = new HubConnection(API_ALERT_HUB_URL);
    
    console.log("new signalR Hub");

    connection.on("SendAlert", (alert) => {
      console.log("Message from alertHub:");
      console.log(alert);
      store.dispatch(receiveAlert(alert));

    });

    connection.start().catch(err => this.getError(err));
    console.log('signalR connection started');

  };

  getError = error => {
    console.log(error);
  };

}

// const connection = new signalR.HubConnection(API_ALERT_HUB_URL);

// export function start () {

// }

 







