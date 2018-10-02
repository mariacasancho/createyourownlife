var game = function(document){
    var textFinished = true;
    
    var init = function(){
        loadEnviroment();
        introduction();
        var ONE_FRAME_TIME = 1000 / 60 ;
        var mainloop = function() {
           updateGame();
         };
         setInterval( mainloop, ONE_FRAME_TIME );
         
       
   }

   var loadEnviroment = function (){
        if(document.body != null){ 
            var yesButton = document.createElement('button'),
                noButton = document.createElement('button'),
                container=document.createElement('div');

            yesButton.id = "yesButton",
            yesButton.innerHTML = "Yes",
            yesButton.style.display = 'none';
            noButton.id = "noButton",
            noButton.innerHTML = "No",
            noButton.style.display = 'none';
            container.id = "container";

            container.appendChild(yesButton);
            container.appendChild(noButton);
            
            var enviroment = document.createElement('div'),
                text = document.createElement('div'),
                textone = document.createElement('div'),
                texttwo = document.createElement('div'),
                textthree = document.createElement('div'),
                textfour = document.createElement('div');
            
            
            enviroment.id = "enviroment";
            text.id = "text";
            textone.id = "textOne";
            texttwo.id = "textTwo";
            textthree.id = "textThree";
            textfour.id = "textFour";
/*
            text.appendChild(textone);
            text.appendChild(texttwo);
            text.appendChild(textthree);
            text.appendChild(textfour);
            */

            enviroment.appendChild(container);
            enviroment.appendChild(text);

            document.body.appendChild(enviroment); 
        }else{
            alert("is not possible to load the game")
        }

   }

   var showText = function (target, message, index, interval) { 
        if (index < message.length) { 
            textFinished = false;
            target.innerHTML  = target.innerHTML + (message[index++]); 
            setTimeout(function () { showText(target, message, index, interval); }, interval); 
        }else {
            textFinished = true;
        }
   }

   /*var addText = function (message){
        var textElement;
        if (message[0].length > 1){
            if (document.getElementById('textOne').innerHTML == ''){
                textElement = document.getElementById('textOne');
            }else if (document.getElementById('textTwo').innerHTML == ''){
                textElement = document.getElementById('textOne');
            }else if (document.getElementById('textThree').innerHTML == ''){
                textElement = document.getElementById('textThree');
            }else{
                document.getElementById('textOne').innerHTML = document.getElementById('textTwo').innerHTML;
                document.getElementById('textTwo').innerHTML = document.getElementById('textThree').innerHTML;
                document.getElementById('textThree').innerHTML = document.getElementById('textFour').innerHTML;
                textElement = document.getElementById('textFour');
            }

            showText(textElement, message[0], 0, 50);
            message.splice(0, 1);
        }
   }*/
   

   var introduction = function (){
       var introText = "Welcome to create your own adventure, we will guide you through one life, one only life that you will choose... \n your life";

        showText(document.getElementById('text'), introText, 0, 50);
       console.log("paco");
   }

   var displayButtons = function (){
        if (textFinished){
            document.getElementById('yesButton').style.display = 'block';
            document.getElementById('noButton').style.display = 'block';
        }
   }

    var updateGame = function(){
        displayButtons();
    }



   return {
      Init: init
   }
}(document);
game.Init();