
window.addEventListener("DOMNodeInserted", (event) => {
    // alert("DOMNodeInserted");
    //resize();
  });
  
  
  function resize() {
    var clientHeight = document.getElementById("mainDiv").scrollHeight;
    //alert(clientHeight);
    parent.postMessage(
      {
        user_age: clientHeight,
        user_height: $("input[name='user_height']").val(),
      },
      "*"
    );
  }
  
  $("form[name='user_data']").submit(function (e) {
    // Prevent the form from submitting via its default manner.
    e.preventDefault();
    e.stopPropagation();
  
    // Send the user's age and height to the parent window--sending the
    // data as an object that the parent can receive and parse.
    console.log("Sending data to http://localhost:4200/");
    var clientHeight = document.getElementById("mainDiv").scrollHeight + 0;
    parent.postMessage(
      {
        user_age: clientHeight,
        user_height: $("input[name='user_height']").val(),
      },
      "*"
    );
  
    
  });