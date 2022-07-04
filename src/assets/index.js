
// window.addEventListener("DOMNodeInserted", (event) => {
//     // alert("DOMNodeInserted");
//     resize();
//   });
  
  
//   function resize() {
//     var clientHeight = document.getElementById("mainDiv").scrollHeight;
//     //alert(clientHeight);
//     parent.postMessage(
//       {
//         user_age: clientHeight,
//         user_height: $("input[name='user_height']").val(),
//       },
//       "*"
//     );
//   }
  
//   $("form[name='user_data']").submit(function (e) {
//     // Prevent the form from submitting via its default manner.
//     e.preventDefault();
//     e.stopPropagation();
  
//     // Send the user's age and height to the parent window--sending the
//     // data as an object that the parent can receive and parse.
//     console.log("Sending data to http://localhost:4200/");
//     var clientHeight = document.getElementById("mainDiv").scrollHeight + 0;
//     parent.postMessage(
//       {
//         user_age: clientHeight,
//         user_height: $("input[name='user_height']").val(),
//       },
//       "*"
//     );
  
    
//   });

function resize()
{
  var clientHeight = document.getElementById('mainDiv').scrollHeight;
//alert('hello');
  parent.postMessage(
    { 
      user_age:    clientHeight,
      user_height: $("input[name='user_height']").val(),
    },
    "*");
}
// Using the form's submit button, let's submit the form using
// JavaScript and jQuery.
// $("form[name='user_data']").submit(function(e) {
//   // Prevent the form from submitting via its default manner.
//   e.preventDefault();
//   e.stopPropagation();

//   // Send the user's age and height to the parent window--sending the
//   // data as an object that the parent can receive and parse.
//   console.log("Sending data to http://localhost:4200/");
//   var clientHeight = document.getElementById('mainDiv').scrollHeight;
//   parent.postMessage(
//     { 
//       user_age:    clientHeight,
//       user_height: $("input[name='user_height']").val(),
//     },
//     "http://localhost:53388/");

//   // The `parent.postMesage()` call allows you to specify "*" as the
//   // second argument--allowing you to send messages to any parent
//   // window regardless of the parent window's origin. To me, this
//   // method is insecure because you're basically allowing the code to
//   // say, "Hey, I have this message I'm going to send and I don't
//   // care who I send it to since I have a wildcard specified." It is
//   // my opinion that you always know where your iframe's messages are
//   // being sent when you create the communication between an iframe
//   // and its parent window; and that you do not use "*" if you know
//   // the parent windows origin.
//   //
//   // From the MDN:
//   //
//   // "Always provide a specific targetOrigin, not *, if you know
//   // where the other window's document should be located. Failing to
//   // provide a specific target discloses the data you send to any
//   // interested malicious site.
//   //
//   // Here's what the wildcard method looks like:
//   //
//   // parent.postMessage(
//   //	{
//   //		user_age:    $("input[name='user_age']").val(),
//   //		user_height: $("input[name='user_height']").val(),
//   //	},
//   //	"*");
// });