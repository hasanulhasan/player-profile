let player_1 = document.getElementById('playerName-1'); // name of each player fetch
let player_2 = document.getElementById('playerName-2');
let player_3 = document.getElementById('playerName-3');
let player_4 = document.getElementById('playerName-4');
let player_5 = document.getElementById('playerName-5');
let player_6 = document.getElementById('playerName-6');

let playerBtn_1 = document.getElementById('playerBtn-1'); // button of each player fetch
let playerBtn_2 = document.getElementById('playerBtn-2');
let playerBtn_3 = document.getElementById('playerBtn-3');
let playerBtn_4 = document.getElementById('playerBtn-4');
let playerBtn_5 = document.getElementById('playerBtn-5');
let playerBtn_6 = document.getElementById('playerBtn-6');

let perPlayerField = document.getElementById('perPlayerField'); //input fields
let managerField = document.getElementById('managerField');
let coachField = document.getElementById('coachField');

let playerCost = document.getElementById('playerCost'); // cost fields
let totalCost = document.getElementById('totalCost');
let playerCostBtn = document.getElementById('playerCostBtn');
let totalCostBtn = document.getElementById('totalCostBtn');

let playerList = document.getElementById('playerList'); // Ol list

function enterAChild(element, textVariable, whereToShow){   // entering element to list
  let node = document.createElement(element);
  let textNode = document.createTextNode(textVariable.innerText);
  node.appendChild(textNode);
  document.getElementById(whereToShow).appendChild(node);
}

function isMore5times(count){   // function to check 5 times
  if(count >= 6){
    alert("You have selected five player");
    e.stopPropagation();
  }
}

function btnDisable(btnNumber){
  btnNumber.className = 'bg-blue-500 text-white font-bold py-2 px-4 opacity-50 cursor-not-allowed rounded-lg px-5 py-2.5 text-center mr-2 mb-2';
  btnNumber.disabled = true;
}

let counter = 0;

// event lisner for player starts

playerBtn_1.addEventListener('click', function(){
  counter += 1;
  isMore5times(counter);
  enterAChild('li', player_1, 'playerList');
  btnDisable(playerBtn_1);
})
playerBtn_2.addEventListener('click', function(){
  counter += 1;
  isMore5times(counter);
  enterAChild('li', player_2, 'playerList');
  btnDisable(playerBtn_2);
})
playerBtn_3.addEventListener('click', function(){
  counter += 1;
  isMore5times(counter);
  enterAChild('li', player_3, 'playerList');
  btnDisable(playerBtn_3);
})
playerBtn_4.addEventListener('click', function(){
  counter += 1;
  isMore5times(counter);
  enterAChild('li', player_4, 'playerList');
  btnDisable(playerBtn_4);
})
playerBtn_5.addEventListener('click', function(){
  counter += 1;
  isMore5times(counter);
  enterAChild('li', player_5, 'playerList');
  btnDisable(playerBtn_5);
})
playerBtn_6.addEventListener('click', function(){
  counter += 1;
  isMore5times(counter);
  enterAChild('li', player_6, 'playerList');
  btnDisable(playerBtn_6);
})

// event lisner for player end

// calculation start
playerCostBtn.addEventListener('click', function(){
  playerCost.innerText = perPlayerField.value * counter;
})
totalCostBtn.addEventListener('click', function(){
  let manager = parseInt(managerField.value);
  let coach = parseInt(coachField.value);
  let perPlayer = parseInt(playerCost.innerText);
  totalCost.innerText = manager + coach + perPlayer;
})
// calculation end
