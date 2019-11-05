export const Message = class {

    constructor(channel, action, payload = null) {
        this.channel = channel;
        this.action = action;
        this.payload = payload;
    }

    toString() {
        return JSON.stringify({
            channel: this.channel,
            action: this.action,
            payload: this.payload
        });
    }
};

export function isMessage(obj) {
    return obj && typeof obj === "object" && obj.hasOwnProperty('channel') && obj.hasOwnProperty('action');
}
