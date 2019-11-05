#Post Message Dispatcher class

##Usage as master:

```js
const site_url = "http://example.com/";
let iframe = document.querySelector('iframe');
iframe.src = site_url;
iframe.addEventListener('load', ()=>{
    let dispatcher = PostMessageDispatcher(iframe.contentWindow, site_url, "mychannel");
    dispatcher.listen( message =>{
        console.log("Message received as master: ", message);
    });
    dispatcher.send("myaction", {some_payload: 123})
})
```

##Usage as slave:

```js
let dispatcher = PostMessageDispatcher(window.parent, "*", "mychannel");
dispatcher.listen( message =>{
    console.log("Message received as slave: ", message);
});
dispatcher.send("myaction2", {some_payload2: 321})
```
