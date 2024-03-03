function parser(cmd){
  let commandWords = cmd.trim().toUpperCase().split(" ");
  switch(commandWords.length){
    case 1:
    switch(commandWords[0]){

      // DIRECTIONS-------------------------------
      case "NORTH":
      if(exits[currentPosition].search(commandWords[0].substr(0,1)) >= 0){
        currentPosition -= MAPWIDTH;
        showRoom();
        showMap();
      }else{
        outputText("You cant go that way!");
      };
      break;
      
      case "SOUTH":
      if(exits[currentPosition].search(commandWords[0].substr(0,1)) >= 0){
        currentPosition += MAPWIDTH;
        showRoom();
        showMap();
      }else{
        outputText("You cant go that way!");
      };
      break;

      case "EAST":
      if(exits[currentPosition].search(commandWords[0].substr(0,1)) >= 0){
        currentPosition += 1;
        showRoom();
        showMap();
      }else{
        outputText("You cant go that way!");
      };
      break;

      case "WEST":
      if(exits[currentPosition].search(commandWords[0].substr(0,1)) >= 0){
        currentPosition -= 1;
        showRoom();
        showMap();
      }else{
        outputText("You cant go that way!")
      };
      break;

      case "N":
      if(exits[currentPosition].search(commandWords[0].substr(0,1)) >= 0){
        currentPosition -= MAPWIDTH;
        showRoom();
        showMap();
      }else{
        outputText("You cant go that way!");
      };
      break;

      case "S":
      if(exits[currentPosition].search(commandWords[0].substr(0,1)) >= 0){
        currentPosition += MAPWIDTH;
        showRoom();
        showMap();
      }else{
        outputText("You cant go that way!");
      };
      break;

      case "E":
      if(exits[currentPosition].search(commandWords[0].substr(0,1)) >= 0){
        currentPosition += 1;
        showRoom();
        showMap();
      }else{
        outputText("You cant go that way!");
      };
      break;

      case "W":
      if(exits[currentPosition].search(commandWords[0].substr(0,1)) >= 0){
        currentPosition -= 1;
        showRoom();
        showMap();
      }else{
        outputText("You cant go that way!")
      };
      break;

      // SKILL TEST ----------------------------

      case "DIE":
      if(skills[0].includes("GRIM-REAPER") == false){
    outputText("You can't die...");

      outputText("BECAUSE OF YOUR DESIRE TO DIE YOU HAVE ACQUIRED THE SKILL `GRIM-REAPER`. THE ONE WHO RULES OVER DEATH.");

      
      skills[0] = skills[0] + "\n" + deathSkill[0];

      deathSkill[0].replace("GRIM-REAPER", "");
// skills[0] to Grim-REAPER
      outputTextSkills("GRIM-REAPER");
      }else{
        outputText("YOU ALREADY DID THAT.");
      };
      
    break;

    // case 2 words in case 1 

    case "GET":
  
        outputText("What should I get?");
      
      break;

      case "TAKE":
  
        outputText("What should I take?");
      
      break;

      case "PICK":
  
        outputText("What should I pick?");
      
      break;

      case "EAT":
  
        outputText("What should I eat?");
      
      break;

      case "ACQUIRE":
  
        outputText("What should I acquire?");
      
      break;

      case "OBTAIN":
  
        outputText("What should I obatin?");
      
      break;

      case "USE":
  
        outputText("What should I use?");
      
      break;

      case "KILL":

      outputText("WHAT!?");

      break;

      case "YES":
      if(objects[0].search("MAGIC-STONES") >= 0 && currentPosition == 2){
        objects[0] = objects[0].replace("MAGIC-STONES", "");

        exits[2] = exits[2] + "SWE";

        outputText("YOU HAVE GIVEN THE `MAGIC-STONES` TO THE DRAGON, AND EARNED ITS FAVOUR. BY IT'S GRACE YOU HAVE EARNED THE SKILL `DRAGON'S-CONSTITUTION`. YOU ALSO GOT A `BRONZE-KEY`. THE DOOR TO THE EAST HAS BEEN OPENED BY THE DRAGON. YOU CAN GO SOUTH EAST AND WEST.");

       skills[0] = skills[0] + "\n" + "DRAGON'S-CONSTITUTION";


       objects[0] = objects[0] + "\n" + "BRONZE-KEY";

// objects[0] to bronze-key
       
       itemName(objects[0]);
       

       outputTextSkills("DRAGON'S CONSTITUTION");
      }else if(objects[0].includes("MAGIC-STONES") == false && currentPosition == 2){
        outputText("THE DRAGON IS FURIOUS, AND IT KILLS YOU WITH ONE STRIKE...");
        outputText("YOU HAVE DIED");
        outputText("TYPE IN `RESTART` to play again.")

        //window.open("/Html/gameOver.html", '_self');
      };

      break;

      case "NO":
      if(objects[0].includes("MAGIC-STONES") == false && currentPosition == 2){
       //window.open("/Html/gameOver.html", '_self'); 
       outputText("YOU HAVE DIED");
       outputText("TYPE IN `RESTART` TO PLAY THE GAME AGAIN.")
      }else if(objects[0].includes("MAGIC-STONES") == true && currentPosition == 2){
        outputText("Dont lie...");
      };
      break;

      case "RESTART":
      window.open('/Html/game.html', '_self');
      break;

      // sleep
    };

    

    // 2 Words --------------------------

    
    
    case 2: 
    switch (commandWords[0]){

      //OBJECTS------------------------------------------
      
      case "GET":
      if(objects[currentPosition].search(commandWords[1]) >= 0 && commandWords[1] != ""){
        
        objects[0] = objects[0] + "\n" + commandWords[1];
        outputText("You have picked up " + commandWords[1]);

        objects[currentPosition] = objects[currentPosition].replace(commandWords[1], "");

        itemName(objects[0]);

        

      }else{
        outputText("I can't find that");
      };

      case "GET":
      if(commandWords[1] == "MONSTER" || commandWords[1] == "MONSTER-CORPSE" && currentPosition == 6){
        outputText("IT IS TOO BIG TO CARRY.");
      };

      
      break;

      case "TAKE":
      if(objects[currentPosition].search(commandWords[1]) >= 0){
        
        objects[0] = objects[0] + "\n" + commandWords[1];
        outputText("You have picked up " + commandWords[1]);

        

        objects[currentPosition] = objects[currentPosition].replace(commandWords[1],"");

        itemName(objects[0]);

      }else{
        outputText("I can't find that")
      };

      
      break;

      case "PICK":
      if(objects[currentPosition].search(commandWords[1]) >= 0){
        
        objects[0] = objects[0] + "\n" + commandWords[1];
        outputText("You have picked up a " + commandWords[1]);

        itemName(objects[0]);

        objects[currentPosition] = objects[currentPosition].replace(commandWords[1],"");

      }else{
        outputText("I can't find that");
      };
      
      break;

      case "EAT":
      if(objects[currentPosition].search(commandWords[1]) >= 0){
        
        objects[0] = objects[0] + "\n" + commandWords[1];
        outputText("You have eaten MAGIC-STONES. YOU GAINED THE SKILL `MAGIC-ENHANCEMENT`." );

        skills[0] = skills[0] + "MAGIC-ENHANCEMENT";

        outputTextSkills("MAGIC-ENHANCEMENT");
        itemName(objects[0]);

        objects[currentPosition] = objects[currentPosition].replace(commandWords[1], "");

      }else if(commandWords[1] == "MAGIC-STONES" && objects[0].includes("MAGIC-STONES") == true){
        outputText("YOU HAVE EATEN THE MAGIC-STONES. YOU HAVE GAINED THE SKILL MAGIC ENHANCEMENT.");
        skills[0] = skills[0] + "MAGIC-ENHANCEMENT";

       outputTextSkills("MAGIC-ENHANCEMENT");
      }else{
        outputText("I can't find that");
      };
      
      break;


      // use objects and skills
      case "USE":

      if(commandWords[1] == "BRONZE-KEY" && objects[0].includes("BRONZE-KEY") == true){
        exits[3] = exits[3] + "S";
        exits[5] = exits[5] + "E";
        outputText("YOU HAVE UNLOCKED THE DOOR TO THE SOUTH. YOU ALSO HEAR THE SOUND OF ANOTHER DOOR MOVING. BUT DONT KNOW WHERE IT IS.");
        objects[0] = objects[0].replace("BRONZE-KEY", "");
        itemName(objects[0]);
        
      
      }else if(commandWords[1] == "BRONZE-KEY" && objects[0] != commandWords[1]){
        outputText("You don't have that");
      }else if(commandWords[1] == "BRONZE-KEY" && currentPosition != 3){
        outputText("You cant use that here");
      };

      case "USE":
      if(objects[0].search("SKILL-BOOK") >= 0){
        skills[0] = skills[0] + "\n" + "FIRE-BALL";
        outputTextSkills("FIRE-BALL");

        objects[0] = objects[0].replace("SKILL-BOOK", "");
        itemName(objects[0]);

        outputText("You have used item `SKILL-BOOK` and obtained skill `FIRE-BALL`.");
      };

      case "USE":
      if(commandWords[1] == "MAGIC-STONES" && objects[0].search("MAGIC-STONES") >= 0 && currentPosition == 2){
        objects[0] = objects[0].replace("MAGIC-STONES", "");

        exits[2] = exits[2] + "SWE";

        outputText("YOU HAVE GIVEN THE `MAGIC-STONES` TO THE DRAGON, AND EARNED ITS FAVOUR. BY IT'S GRACE YOU HAVE EARNED THE SKILL `DRAGON'S-CONSTITUTION`. YOU ALSO GOT A `BRONZE-KEY`. THE DOOR TO THE EAST HAS OPENED BY THE DRAGON. YOU CAN GO SOUTH EAST AND WEST.");

       skills[0] = skills[0] + "\n" + "DRAGON'S-CONSTITUTION";

       objects[0] = objects[0].replace("MAGIC-STONES", "")

       objects[0] = objects[0] + "\n" + "BRONZE-KEY";

       itemName(objects[0]);

       outputTextSkills("DRAGON'S-CONSTITUTION");

      }else if(objects[0].includes("MAGIC-STONES") == false && currentPosition == 2){

        outputText("THE DRAGON IS FURIOUS, AND IT KILLS YOU WITH ONE STRIKE...");
        outputText("YOU HAVE DIED");
        outputText("TYPE IN RESTART TO PLAY AGAIN")

        //window.open("/Html/gameOver.html", '_self');
      };

      case "USE":

      if(commandWords[1] == "FIRE-BALL" && currentPosition == 6){
        outputText("YOU HAVE USED THE SKILL FIRE-BALL. YOU HAVE DEFETED THE MONSTER. YOU ALSO GOT THE SILVER KEY HANGING ON ITS NECK.");

        objects[0] = objects[0] + "\n" + "SILVER-KEY";
        itemName(objects[0]);

      };

      case "USE":
      if(commandWords[1] == "GRIM-REAPER" && skills[0].includes("GRIM-REAPER") == true){
        outputText("YOU WIN!");

        window.open('/Html/win.html', '_self');

      };

      case "USE":
      if(commandWords[1] == "SILVER-KEY" && currentPosition == 6 && objects[0].includes("SILVER-KEY") == true){
        outputText("THE DOOR TO THE NORTH, SOUTH AND WEST HAS OPENED.");
        exits[6] = exits[6] + "NWS";
        objects[0] = objects[0].replace("SILVER-KEY", "");
        itemName(objects[0]);
      }else if(commandWords[1] == "SILVER-KEY" && currentPosition != 6){
        outputText("YOU CANT USE THAT HERE.")
      };

      case "USE":
      if(commandWords[1] == "GOLDEN-KEY" && currentPosition == 8){
        outputText("YOU HAVE OPENED THE DOOR TO THE SOUTH.");
        outputText("YOU WIN");
        window.open('/Html/win.html', '_self');
      };

      break;

      // teleport

    };
  };
  if(objects[0].includes("SKILL-BOOK") == true || skills[0].includes("FIRE-BALL") == true){
    desc[1] = "THIS IS THE ROOM WHERE YOU GOT THE SKILL-BOOK FROM. THERE IS NOTHING HERE NOW. YOU CAN GO SOUTH, AND EAST.";
  };

  if(skills[0].includes("DRAGON'S-CONSTITUTION") == true){
    desc[2] = "THERE IS A DRAGON SITTING IN THE CORNER PLAYING WITH HIS MAGIC STONES. YOU CAN GO SOUTH, EAST AND WEST.";
  };

  if(exits[3].includes("S") == true){
    desc[3] = "THERE IS A DOOR TO THE SOUTH THAT YOU OPENED WITH THE BRONZE-KEY. EXITS ARE SOUTH AND WEST.";
  };

  if(objects[4].includes("MAGIC-STONES") == false){
    desc[4] = "THIS IS THE ROOM YOU GOT THE MAGIC-STONES FROM. THERE IS NOTHING LEFT HERE. YOU CAN GO NORTH AND EAST.";
  };

  if(exits[6].includes("NWS") == true){
    desc[6] = "THERE IS THE CORPSE OF A MONSTER LYNING ON THE GROUND. YOU CAN GO NORTH, SOUTH, AND WEST.";
  };

  if(objects[7].includes("GOLDEN-KEY") == false){
    desc[7] = "IT IS AN EMPTY DARK ROOM. YOU TAKE REST FOR A WHILE AFTER THE LONG JOURNEY. YOU FOUND THE GOLDEN-KEY IN  THIS ROOM, BUT NOW THERE IS NOTHING HERE.";
  };
};