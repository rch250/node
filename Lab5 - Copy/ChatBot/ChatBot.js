const EventEmitter = require('events');

module.exports = class ChatBot extends EventEmitter {
    constructor(connector) {
        super();

        let names = [];

        connector.on("join", (time, name) => {
            names.push(name);
            this.emit("post","Welcome " + name);
            this.emit("post", names.join(" and ") + " have also joined the chat");
        });
        connector.on("post", (time, name, post) => {
            if ((post.substring(0,8)) === "@ChatBot") {
                if (post.substring(9) === "time") {
                    const d = new Date();
                    this.emit("post", d);
                } else if (post.substring(9) === "rollcall") {
                    this.emit("post", names.join(" and ") + " have also joined the chat");
                } else  {
                    this.emit("post", " you have asked for help about " + post);
                }
            }
        });
        connector.on("leave", (time, name) => {
            for (var i=0;i<names.length; i++) {
                if (names[i] === "name") {
                    names.splice(i,1);
                }
            }
        });

        process.nextTick(() => this.emit("name","ChatBot"));
        this.emit("name", "ChatBot");
    }


}