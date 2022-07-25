function resize() {
  setTimeout(resizeWithDelay, 500);
}

function resizeWithDelay() {
  var clientHeight = document.getElementById("mainDiv").scrollHeight;
  console.log("resizeWithDelay function called.........");
  parent.postMessage(
    {
      user_age: clientHeight,
      user_height: $("input[name='user_height']").val(),
    },
    "*"
  );
}


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
