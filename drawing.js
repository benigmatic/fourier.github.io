
let drawcoord=[];

  window.addEventListener('load', ()=> {
   resize(); //Resizes the canvasonce the window loads
   document.addEventListener('mousedown', startPainting);
   document.addEventListener('mouseup', stopPainting);
   document.addEventListener('mousemove', sketch);
   window.addEventListener('resize', resize);
   //alert("Event Listern Loaded");
  });

    const canvas = document.querySelector('#canvas');
    //context for the canvas for 2 dimensional operations
    
    const ctx = canvas.getContext ("2d");

function resize (){
  //  ctx.canvas.width = window.innerWidth;
  //  ctx.canvas.height = window.innerHeight;
}
// stores the intial position of the cursor
let coord = {x:0,y:0};
let paint = false;
// Updates the coordinates of the cursor when an event e
// is triggered to the coordintes where the said event is triggered
function getPosition (event){
  
    coord.x = event.clientX - canvas.offsetLeft;
   
    coord.y = event.clientY - canvas.offsetTop;
  // alert("Done");
}
function startPainting (event){
//  alert("startpaint");
    paint = true;
    getPosition (event);
}
function stopPainting(){
    paint = false;
}
function sketch (event) {
   // alert("Start painting");
    if (!paint) return;
   
    ctx.beginPath();
    ctx.lineWidth =3;
    //Sets the end of the lines drawn to a round shape;
    ctx.lineCap = 'straight';
    ctx.strokeStyle = '#1e1f20';
    // The cursor to start drawing moves to this coordintes
    ctx.moveTo (coord.x, coord.y);
    //The position of the cursor gets updated as we move the mouse around
   
    getPosition (event);
    var obj = {};
    obj.x = coord.x;
    obj.y = coord.y;
    drawcoord.push(obj);

    ctx.lineTo (coord.x, coord.y);
    // draws the line;
  
    ctx.stroke();
}
function Clear () {
const context = 
canvas.getContext ('2d');
context.clearRect(0,0,canvas.width, canvas.height);
time = 0;
 path = [];
 x = [];
 y = [];
drawcoord = [];
}
