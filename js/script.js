$(function() {

  setInterval(function(){
    changeColor()
  },
  10000);

  function changeColor(){
    $('#page').css('background-color', 'red');
  }
})
