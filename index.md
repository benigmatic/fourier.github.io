<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Fourier Drawing</title>
  <link rel="stylesheet" type="text/css"href="style.css">
  
</head>
<body>
  <h1 class= "h1" >Fourier drawings</h1>
  <p>Draw any figure on canvas in order to create an animation of this figure drawn using Fourier series. </p>
  <br>
  <button class="button" onclick="Clear()">Clear canvas</button>
  <button class="button"onclick="setup()">Generate drawings</button>
  <canvas id = "canvas" class = "canvas" style = "background : rgb(236, 231, 231); margin:20px 20px; border-color:black; border-width:2px; border-radius:5px;" height = "600px" width = "600px"></canvas>
 <p>The more straight lines your drawing has, the more accurate the drawing will be.</p>


 
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/p5.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/addons/p5.dom.min.js"></script>
  <script src="drawing.js"></script>
  
  <script src="fourier.js"></script>
  <script src="sketch.js"></script>
</body>
</html>
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
