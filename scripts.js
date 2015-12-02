/*************************************************************************************
 * "Get the droid" Copyright (c) 2015 Nishith Kumar.
 * 
 * Get the droid" project is the original work of Nishith kumar and was developed in 
 * September 2015 as the Javascript project for Rob Percival's Complete Web Developer 
 * Course at Udemy. 
 *
 * This program comes with NO WARRANTY and is licensed under a Creative Commons 
 * Attribution-NonCommercial-ShareAlike 4.0 International License. Any Adapted Material 
 * must include this header for attribution to the original creator. 
 *************************************************************************************/
 
	var count = 0;
	var score = 0;
	var highScore = 0;
	var spin = 0;
	var isNewHigh = false;
	var isFirstAttempt=true;
	var challengeCompleted=false;

	
	function initialize(){
		count = 0;
		score = 0;
		isNewHigh = false;
		
		document.getElementById("box").style.backgroundColor = "#FFFFFF";  
		document.getElementById("droid").style.display = "none";
		document.getElementById("gameOver").style.display = "none";
		document.getElementById("gameOverNewHigh").style.display = "none";
		document.getElementById("youWon").style.display = "none";
		document.getElementById("restartChallenge").style.display = "none";
		document.getElementById("instructions").style.display = "block";
		document.getElementById("score").innerHTML = "Score : "+score;

		document.getElementById("isNewHigh").innerHTML = "";
		
		spinDroid();
	}
	
	function spinDroid(){
		spin = spin+1;
		
		if(spin==1){
			document.getElementById("droidLogo").src = "images/rotate-1.png";
			setTimeout(spinDroid,200);
		}else if(spin==2){
			document.getElementById("droidLogo").src = "images/rotate-2.png";
			setTimeout(spinDroid,200);
		}else if(spin==3){
			document.getElementById("droidLogo").src = "images/rotate-3.png";
			setTimeout(spinDroid,200);
		}else if(spin==4){
			document.getElementById("droidLogo").src = "images/rotate-4.png";
			setTimeout(spinDroid,200);
		}else{
			document.getElementById("droidLogo").src = "images/android_logo.png";
			spin=0;
		}
	}

	document.getElementById("instructions").onclick = function(){	
			this.style.display = "none";
			
			drawDroid();
	}
	
	document.getElementById("droid").onclick = function(){	
			this.style.display = "none";
			score  = score+10;
			document.getElementById("score").innerHTML = "Score : "+score;
			
			if(score > highScore){
				highScore = score;
				document.getElementById("highScore").innerHTML = "High Score : "+highScore;
				
				if(!isFirstAttempt){
					isNewHigh = true;
				}
			}
			
			
			if(isNewHigh){
				//document.getElementById("isNewHigh").style.display = "block";
				document.getElementById("isNewHigh").innerHTML = "Achieved a new High Score of "+highScore;
			}
	}
	
	
	document.getElementById("restartChallenge").onclick = function(){	
		location.reload(); 
	}
	
	
	function startGame(){
		drawDroid();
	}
	

	function randomTime(){
		var x=Math.random() * 1800;  
		x = x + 450;  
		return x;
	}
	
	function wait(){
	/* Do nothing */

	}
	
	function clearScreen()
	{
		document.getElementById("droid").style.display = "none";
	}
	
		
	function randomImage(){
		var imageSrc = ["droid-1.png","droid-2.png","droid-3.png"];
		var src = "images/" ;
			
			src += imageSrc[Math.round(Math.random() * 2)];

			return src;
		}
		
	function loadImage(){
			document.getElementById("droid").src = randomImage();
		}
			
		
	/* Measurements of the drawable area
	 * MAX LEFT = "430px";
	 * MAX TOP = "990px";
	 */
	
	function drawDroid(){
		document.getElementById("droid").style.display = "none";
		document.getElementById("droid").style.top = (Math.random() * 430)+"px";
		document.getElementById("droid").style.left = (Math.random() * 990)+"px";
		
		setTimeout(loadImage, 50);
		document.getElementById("droid").style.display = "block";
		setTimeout(loadImage, 160);

		count++;
		//console.log("count = " + count);
		
		if(count <= 20)
			setTimeout(drawDroid,randomTime());
		else
			gameOver();
		
	}	
	
	
	function gameOver(){
		var temp = 0;
		
		
		document.getElementById("droid").style.display = "none";
		temp = score/10;
		
		
		document.getElementById("box").style.backgroundColor = "#616161";  
		
		if(isFirstAttempt){
			isFirstAttempt = false;
		}
		
	
		if(score >= 200){
			alert("Congratulations you beat the Droid! You got him every time.");
			document.getElementById("youWon").style.display = "block";
			spinDroid();
			challengeCompleted = true;
		}else if(score >= 160){
			alert("You got the Droid " + temp + "/20 times. Excellent! ");
			
			if(isNewHigh)
				document.getElementById("gameOverNewHigh").style.display = "block";
			else
				document.getElementById("gameOver").style.display = "block";
			
		}else if(score >= 120){
			alert("You got the Droid " + temp + "/20 times. He's in trouble now! ");
			
			if(isNewHigh)
				document.getElementById("gameOverNewHigh").style.display = "block";
			else
				document.getElementById("gameOver").style.display = "block";
		}else{
			alert("You got the Droid only " + temp + "/20 times. He's simply too fast! ");
			
			if(isNewHigh)
				document.getElementById("gameOverNewHigh").style.display = "block";
			else
				document.getElementById("gameOver").style.display = "block";
		}
		

		
		/* Start New game */
		if(!challengeCompleted){
			setTimeout(initialize,7000);
		}else{
			setTimeout(challengeFinish,7000);
		}
	}
	
	
	function challengeFinish() {
		document.getElementById("youWon").style.display = "none";
		document.getElementById("restartChallenge").style.display = "block";
	}
	

	
	
	/* Execute on page load */
	initialize(); 
		
	
	/*
	 * font-family: 'Roboto', sans-serif;
	 * font-family: 'Open Sans', sans-serif;
	 * font-family: 'Raleway', sans-serif;
	 */
	

		