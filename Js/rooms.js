let rooms = [], desc = [], exits = [], objects = [], deathSkill = [], skills = [], currentPosition;
const MAPWIDTH = 3;

function initGame() {
  rooms[0] = "";
  rooms[1] = "EMPTY ROOM ONE";
  rooms[2] = "DRAGON'S LAIR";
  rooms[3] = "EMPTY ROOM TWO";
  rooms[4] = "MAGIC STONES ROOM";
  rooms[5] = "DUNGEON";
  rooms[6] = "MONSTER'S ROOM";
  rooms[7] = "GOLDEN KEY ROOM";
  rooms[8] = "EXIT DOOR";
  rooms[9] = "EMPTY ROOM THREE";

  desc[0] = "";
  desc[1] = "YOU FIND A BOOK. IT'S A `SKILL-BOOK`. IT SAYS FIRE BALL. [YOU CAN GO SOUTH AND EAST.]";
  desc[2] = "AHHHH! A DRAGON!! YOU TRY TO ESCAPE BUT THEN THE DRAGON STARTS SPEAKING. `LITTLE BRAT. HAVE YOU GOT ANY MAGIC STONES?`";
  desc[3] = "APPERENTLY THERE IS DOOR TO THE SOUTH IN THIS ROOM, BUT IT IS LOCKED. YOU CAN GO WEST.";
  desc[4] = "YOU SEE MANY ROCKS WHICH ARE RAINBOW COLORED. THEY LOOK VERY PRECIOUS. AFTER APPRAISING IT YOU FIND OUT THEY ARE CALLED `MAGIC-STONES`. [WAYS AVAILABLE TO GO ARE NORTH AND EAST.]";
  desc[5] = "YOU ARE NOW IN A DARK PLACE. YOU CAN'T SEE VERY CLEARLY. AFTER SEARCHING FOR A WHILE, YOU FIND TWO EXITS. YOU CAN GO NORTH AND WEST. [ALWAYS USE ITEMS AS SHOWN IN THE TEXT. EXAMPLE: WRITE 'GET SKILL-BOOK' TO GET A SKILL BOOK.]";
  desc[6] = "A WILD MONSTER APPEARS. YOU CAN GO WEST. THE MONSTER HAS A `SILVER-KEY` TIED TO ITS NECK. ALL OF THE EXITS ARE LOCKED.";
  desc[7] = "IT IS AN EMPTY DARK ROOM. YOU TAKE REST FOR A WHILE AFTER THE LONG JOURNEY. YOU SEE SOMETHING SHINING IN THE CORNER. AFTER LOOKING CLOSELY, IT TURNS OUT TO BE A `GOLDEN-KEY`. YOU CAN GO NORTH AND EAST.";
  desc[8] = "THERE IS A HUGE DOOR IN THE SOUTH DIRECTION. EXITS ARE NORTH, EAST AND WEST.";
  desc[9] = "THIS IS AN EMPTY ROOM. EXITS ARE NORTH AND WEST.";

  exits[0] = "";
  exits[1] = "SE";
  exits[2] = "";
  exits[3] = "W";
  exits[4] = "NE";
  exits[5] = "NW";
  exits[6] = "";
  exits[7] = "NE";
  exits[8] = "NEW";
  exits[9] = "NW";

  objects[0] = ""; // magic-stones
  objects[1] = "SKILL-BOOK";
  objects[2] = "";
  //objects[3] = "";
  objects[4] = "MAGIC-STONES";
  //objects[5] = "";
  objects[6] = "";
  objects[7] = "GOLDEN-KEY";
  //objects[8] = "";
  //objects[9] = "";

  
  skills[0] = "";

  deathSkill[0] = "GRIM-REAPER";



  currentPosition = 5;
  showRoom();
  showMap();
};

function showRoom() {
  outputText(desc[currentPosition]);
};

function showMap() {
  let mapBox = document.getElementById("mapBox");
  let currentMap = "map" + currentPosition + ".png";

  mapBox.innerHTML = '<img src = "images/' + currentMap + '" width="100px">';
};