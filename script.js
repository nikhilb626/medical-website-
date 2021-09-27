var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  autoPlay:true,
  draggable: true,
  prevNextButtons: false,
  wrapAround: true,
  groupCells: true
});



function toggleOpen(){
  var openBtn=document.getElementById("nav_bars");

  var menu=document.getElementById("menu_toggle");


  menu.style.top="0px";
  
}



function handleClose(){
  var closeBtn=document.getElementById("nav_times");
  var menu=document.getElementById("menu_toggle");


  menu.style.top="-400px";
}
