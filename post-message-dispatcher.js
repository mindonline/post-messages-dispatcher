import {isMessage, Message} from "./message";

export class PostMessageDispatcher {

    constructor(targetWindow, origin, channel) {
        this.channel = channel;
        this.targetWindow = targetWindow;
        this.origin = origin;
    }

    send(action, payload = null) {
        this.targetWindow.postMessage(new Message(this.channel, action, payload), this.origin);
    }

    listen(callback) {
        window.addEventListener("message", (event)=>{
            if (event.origin !== this.origin)
                return;

            if (isMessage(event.data) && event.data.channel === this.channel) {
                callback(event.data)
            }

        }, false);
    }
}
