
<!-- code for game -->
<script type="text/javascript">
	<!-- Allow rendering of graphics on canvas element -->
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	
	var x = canvas.width/2;
	var y = canvas.height-30;
	var dx = 2;
	var dy = -2;
	var ballRadius = 10;
	var paddleHeight = 10;
	var paddleWidth = 75;
	var paddleX = (canvas.width-paddleWidth)/2;
	var rightPressed = false;
	var leftPressed = false;
	
	document.addEventListener("keydown", keyDownHandler, false);
	document.addEventListener("keyup", keyUpHandler, false);
	
	function keyDownHandler(e) {
		if(e.keyCode == 39) {
			rightPressed = true;
		}
		else if(e.keyCode == 37) {
			leftPressed = true;
		}
	}

	function keyUpHandler(e) {
		if(e.keyCode == 39) {
			rightPressed = false;
		}
		else if(e.keyCode == 37) {
			leftPressed = false;
		}
	}
	
	
	function drawball(){
		ctx.beginPath();
		ctx.arc(x, y, ballRadius, 0, Math.PI*2);
		ctx.fillStyle = "#0095DD";
		ctx.fill();
		ctx.closePath();
	}
	
	function drawPaddle() {
		ctx.beginPath();
		ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
		ctx.fillStyle = "#0095DD";
		ctx.fill();
		ctx.closePath();
	}

	function draw(){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawball();
		drawPaddle();

		<!-- Collision - top or bottom edge canvas  -->
		if(y + dy + ballRadius <0){
			dy = -dy;
		}else if (y + dy + ballRadius > canvas.height){
			if((x > paddleX) && (x < paddleX + paddleWidth)){
				dy = -dy;
			}
			else {
				alert("GAME OVER");
				document.location.reload();
			}
		}
		
		<!-- Collision - Both sides edge canvas  -->
		if((x + dx - ballRadius <0) || (x + dx + ballRadius > canvas.width) ){
			dx = -dx;
		}
		
		if(rightPressed && paddleX < canvas.width-paddleWidth) {
			paddleX += 7;
		}
		else if(leftPressed && paddleX > 0) {
			paddleX -= 7;
		}
		
		x += dx;
		y += dy;
}	
	setInterval(draw, 10);

</script>