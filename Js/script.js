function checkInput(event){
  if(event.key == 'Enter'){
    command = cli.textContent;
    cli.innerHTML = "";
    parser(command);
    event.preventDefault();
  };
};


function outputText(txt){
  var newPara = document.createElement("p");
  newPara.appendChild(document.createTextNode(txt));
  textBox.appendChild(newPara);
  newPara.scrollIntoView();
};

function itemName(txt){
  document.getElementById("contentOne").innerHTML = "";
  
  var newItem = document.createElement("p");
  
  newItem.appendChild(document.createTextNode(txt));
  contentOne.appendChild(newItem);
  newItem.scrollIntoView();
};


function outputTextSkills(txt){
  var newParaOne = document.createElement("ol");
  var newItemOne = document.createElement("li");
          
  newItemOne.appendChild(document.createTextNode(txt));
  contentTwo.appendChild(newItemOne);
  newItemOne.scrollIntoView();
};

function restart(){
  window.open("/Html/game.html", '_self');
};

function exit(){
  if(confirm("DO YOU WANT TO CLOSE THIS WINDOW")){
    window.close();
  };
};
