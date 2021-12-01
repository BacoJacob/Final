
//Disables form elements depending on whether it is a monster or spell/trap

function checkType() { 
    if(document.getElementById("m").checked){
      document.getElementById("stypes").disabled = true;
    }
    else{
      document.getElementById("stypes").disabled = false;
    }
    if(document.getElementById("s").checked || document.getElementById("t").checked){
      document.getElementById("attributes").disabled = true;
      document.getElementById("mtypes").disabled = true;
      document.getElementById("mStypes").disabled = true;
      document.getElementById("Atk").disabled = true;
      document.getElementById("Def").disabled = true;
      document.getElementById("level").disabled = true;
    }
    else{
      document.getElementById("attributes").disabled = false;
      document.getElementById("mtypes").disabled = false;
      document.getElementById("mStypes").disabled = false;
      document.getElementById("Atk").disabled = false;
      document.getElementById("Def").disabled = false;
      document.getElementById("level").disabled = false;
    }
}

//Function to hide and show a card for mock up

function getCard(){
  var x = document.getElementById("hiddenCard");
  var y = window.localStorage.getItem("display");
  x.style.display =  y;
}
function showCard(){
  window.localStorage.setItem("display", "block");
}
function hideCard(){
  window.localStorage.setItem("display", "none");
}

//Search or cards

var documents = [
  {
    id: 1,
    name: 'Revealer of the Ice Barrier',
    attribute: 'Water',
    level: '4',
    mtype: 'Spellcaster',
    mStype: 'Effect',
    atk: '1700',
    def: '1000',
    effect: 'While you control another "Ice Barrier" monster, your opponent cannot Tribute Summon. You can only use each of the following effects of "Revealer of the Ice Barrier" once per turn. You can discard 1 card; Special Summon 1 "Ice Barrier" Tuner from your Deck, also you cannot Special Summon monsters for the rest of this turn, except WATER monsters. If you would discard, or send a card(s) from your hand to the GY, to activate an "Ice Barrier" monster\'s effect, you can banish this card from your GY instead of 1 of those cards.',
    li: 'page3.html'
  },
  {
    id: 2,
    name: 'Hexa Spirit of the Ice Barrier',
    attribute: 'Water',
    level: '1',
    mtype: 'Sea Serpent',
    mStype: 'Effect/Tuner',
    atk: '400',
    def: '200',
    effect: 'While you control another "Ice Barrier" monster, monsters your opponent controls lose 500 ATK/DEF. During your Main Phase: You can send 1 Level 3 or lower "Ice Barrier" monster from your Deck to the GY, and if you do, this card\'s Level becomes the same as that monster\'s, until the end of this turn. You can only use this effect of "Hexa Spirit of the Ice Barrier" once per turn.',
    li: 'page4.html'
  },
  {
    id: 3,
    name: 'Genex Controller',
    attribute: 'Earth',
    level: '3',
    mtype: 'Machine',
    mStype: 'Normal/Tuner',
    atk: '1400',
    def: '1200',
    effect: 'No effect',
    li: 'page5.html'
  },
  {
    id: 4,
    name: 'Aqua Spirit',
    attribute: 'Water',
    level: '4',
    mtype: 'Aqua',
    mStype: 'Effect',
    atk: '1600',
    def: '1200',
    effect: 'Cannot be Normal Summoned/Set. Must first be Special Summoned (from your hand) by banishing 1 WATER monster from your GY. Once per turn, during your opponent\'s Standby Phase: You can target 1 face-up monster your opponent controls; change that target\'s battle position, and if you do, it cannot change its battle position for the rest of this turn.',
    li: 'page6.html'
  },
  {
    id: 5,
    name: 'Trishula, Dragon of the Ice Barrier',
    attribute: 'Water',
    level: '9',
    mtype: 'Dragon',
    mStype: 'Synchro/Effect',
    atk: '2700',
    def: '2000',
    effect: 'While you control another "Ice Barrier" monster, monsters your opponent controls lose 500 ATK/DEF. During your Main Phase: You can send 1 Level 3 or lower "Ice Barrier" monster from your Deck to the GY, and if you do, this card\'s Level becomes the same as that monster\'s, until the end of this turn. You can only use this effect of "Hexa Spirit of the Ice Barrier" once per turn.',
    li: 'page7.html'
  },
  {
    id: 6,
    name: 'Medallion of the Ice Barrier',
    stype: 'Normal Spell',
    effect: 'Add 1 "Ice Barrier" monster from your Deck to your hand.',
    li: 'page8.html'
  },
  {
    id: 7,
    name: 'Freezing Chains of the Ice Barrier',
    stype: 'Continuous Spell',
    effect: 'When this card is activated: You can target 1 Level 4 or lower "Ice Barrier" monster in your GY; Special Summon it. While you control 3 or more "Ice Barrier" monsters, "Ice Barrier" monsters you control are unaffected by the activated effects of your opponent\'s monsters that were Special Summoned from the Extra Deck. You can only activate 1 "Freezing Chains of the Ice Barrier" per turn.',
    li: 'page9.html'
  },
  {
    id: 8,
    name: 'Where Arf Thou?',
    stype: 'Normal Spell',
    effect: 'If you control a Level 1 monster: Add 1 Level 1 monster from your Deck to your hand. During the End Phase of this turn, take 2000 damage if you did not Normal Summon the added monster, or a card with the same name, after activating this card.',
    li: 'page10.html'
  },
  {
    id: 9,
    name: 'Heavy Storm Duster',
    stype: 'Normal Trap',
    effect: 'Target up to 2 Spells/Traps on the field; destroy them. You cannot conduct your Battle Phase the turn you activate this card.',
    li: 'page11.html'
  },
  {
    id: 10,
    name: 'Mind Drain',
    stype: 'Continuous Trap',
    effect: 'Activate this card by paying 1000 LP. Neither player can activate the effects of monsters in the hand.',
    li: 'page12.html'
  },
];

  const hid = {
    id: 11,
    name: 'Silent Angler',
    attribute: 'Water',
    level: '4',
    mtype: 'Fish',
    mStype: 'Effect',
    atk: '800',
    def: '1200',
    effect: 'If you control a WATER monster, you can Special Summon this card (from your hand), but you cannot Special Summon monsters from your hand for the rest of this turn.',
    li: 'page13.html'
  };
let miniSearch = new MiniSearch({
  fields: ['name', 'attribute', 'level', 'mtype', 'mStype', 'stype', 'atk', 'def', 'effect'], // fields to index for full-text search
  storeFields: ['name', 'li']
});

// Index all documents
miniSearch.addAll(documents);


function searchFunc() {
  var s = document.getElementById("searchString").value;
  var results = miniSearch.search(s);
  var fResults = "";
  for (let i = 0; i < results.length; i++) fResults += results[i].name.link(results[i].li) + "<br>";
  
  document.getElementById("searchResults").innerHTML = fResults; 
}

function reset(){
  document.getElementById("searchResults").innerHTML = "";
}

// Next/previous controls
function plusCarousel(n) {
  showCarousel(carouselIndex += n);
}

// Thumbnail image controls
function currentCarousel(n) {
  showCarousel(carouselIndex = n);
}

function showCarousel(n) {
  var i;
  var carousel = document.getElementsByClassName("myCarousel");
  var dots = document.getElementsByClassName("dot");
  if (n > carousel.length) {carouselIndex = 1}
  if (n < 1) {carouselIndex = carousel.length}
  for (i = 0; i < carousel.length; i++) {
      carousel[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  carousel[carouselIndex-1].style.display = "block";
  dots[carouselIndex-1].className += " active";
}