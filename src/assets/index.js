
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
