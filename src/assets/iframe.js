
      // Determine how the browser should listen for messages from other
      // windows. If `addEventListener` exists, then use that. Otherwise, use
      // `attachEvent` because an older browser is probably being used. Also,
      // use a callback to handle messages so that both methods of "message
      // listening" can be routed to the same function. The callback in this
      // example is `handleMessage` and it will take one argument (the
      // `MessageEvent` object).
      if (window.addEventListener) {
        window.addEventListener("message", handleMessage);
      } else {
        window.attachEvent("onmessage", handleMessage);
      }

      /**
       * Handle a message that was sent from some window.
       *
       * @param {MessageEvent} event The MessageEvent object holding the message/data.
       */
      function handleMessage(event) {
        console.log("Received a message from " + event.origin + ".");

        // If the window that sent this message is not http://localhost:4200, then
        // that message needs to be thrown out.
        // if (event.origin != "http://localhost:4200") {
        //   console.log(
        //     "The message came from some site we don't know. We're not processing it."
        //   );
        //   return;
        // }

        // When one window sends a message, or data, to another window via
        // `parent.postMessage()`, the message (the first argument) in the
        // `parent.postMessage()` call is accessible via `event.data` here.
        var dataFromChildIframe = event.data;

        // Log the data to the console.
        console.log(dataFromChildIframe);

        // Show that the data was received.
        var myIFrame = document.getElementById("myIFrame");
        myIFrame.style["height"] = dataFromChildIframe.user_age + "px";
      }
 