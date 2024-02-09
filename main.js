
// Data of The Fellowship
const fellowship = [
  {
    id: 1,
    name: "Aragorn",
    type: "Mortal",
    orcArmy: false,
    imageUrl: "https://cdn.mos.cms.futurecdn.net/pj4peqQeuvoxSMrm3GGoER.jpg"
  },
  {
    id: 2,
    name: "Frodo Baggins",
    type: "Hobbit",
    orcArmy: false,
    imageUrl: "https://myhero.com/images/guest/g243/hero88060/g243_u118192_frodo1.jpg"
  },
  {
    id: 3,
    name: "Legolas",
    type: "Elf",
    orcArmy: false,
    imageUrl: "https://cdn.staticneo.com/w/lotr/thumb/Legolas_logo.jpg/250px-Legolas_logo.jpg"
  },

  {
    id: 4,
    name: "Gimli",
    type: "Dwarf",
    orcArmy: false,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeJ3PFoiIERu7GLrFnEFyw62xT8qqrbVFmhQ&usqp=CAU"
  },

  {
    id: 5,
    name: "Gandalf The Grey",
    type: "Wizard",
    orcArmy: false,
    imageUrl: "https://middle-earth.xenite.org/files/2014/01/gandalf-the-white.jpg"
  },
];

// Orc Army Data
const urukHai = [
  {
    id: 1,
    name: "Lurtz",
    type: "Orc",
    orcArmy: true,
    imageUrl:"https://static.wikia.nocookie.net/lotr/images/4/4e/Lord_of_the_rings_Lurtz.jpg/revision/latest/scale-to-width-down/250?cb=20131107182402"
  },
];

// Saruman's Army array
const sauronsArmy = []

// Types of the fellowship to sort into
const fellowshipTypes = ["Mortal", "Elf", "Hobbit", "Wizard", "Dwarf" ]

// Code for rendering to DOM so HTML and JS can connect
const renderToDom = (divId, htmlToRender) => {
  const selectedDivID = document.querySelector(divId);
  selectedDivID.innerHTML = htmlToRender;
};

// need a function for form on dom 
// call rendertodom using the domstring the hobbitForm divId 
const formOnDom = () => {
  const domString = `
  <input id="name" type="text"/> 
  <button class="btn btn-success" id="formBtn" type="submit">Start your journey!!</button>`;
renderToDom("#hobbitForm", domString);
};

// Need to query select button to HTML and have event listener for that click for formBtn ID on the form itself
const sortBtn = document.querySelector("#formBtn")
sortBtn.addEventListener("click", formOnDom)






// forEach to loop through all the travelers
const cardsOnDom = (fellowship) => {
  let domString = "";
  fellowship.forEach((traveler) => {
    domString += `<div class="card" style="width: 18rem;">
    <div class="d-flex justify-content-start">...
       <div class="card-body">
        <img src="${traveler.imageUrl}" class="card-img-top">
         <h3 class="card-title">Name: ${traveler.name}</h3>
         <h5 class="card-subtitle mb-2 text-body-secondary">I am a/an: ${traveler.type}</h5>
         <p class="card-text">Are you an Orc? ${traveler.orcArmy ? "Indeed, I serve the Dark Lord" : "No! I want the ring destroyed"}</p>
         <button class="btn btn-dark" id="traitor--${traveler.id}">"Traitor!"</button>
        </div>
       </div>
     </div>`;
  });
  renderToDom("#theFellowship", domString);
};


// Sauron's Army on Dom caller
const armyOnDom = (urukHai) => {
  let domString = "";
  urukHai.forEach(() => {
    domString += `<div class="card" style="width: 18rem;">
      <div class="card-body" id:traitorCard>
      <img src="https://preview.redd.it/what-makes-the-dark-lord-sauron-stand-out-amongst-fictional-v0-7lkp7sxb7bqb1.jpg?auto=webp&s=e8833d4c1a66326f91a57512e1aef7f9bf36f71f" class="card-img-top">
      <h3 class="card-title">OH NO! You betrayed the followship and now you're in Sauron's Army.  </h3>
      <p class="card-text">Are you an Orc? </p>
      </div>
    </div>`;
  });
  renderToDom("#sauronArmy", domString)
}

// Buttons to show after the initial
const fellowButtons = () => {
  let domString = `<button type="button" class="btn btn-danger" id="mortal">Time of Man</button>
    <button type="button" class="btn btn-primary" id="elf">Time of the Elves</button>
    <button type="button" class="btn btn-warning" id="hobbit">Tricksy Hobbitses</button>
    <button type="button" class="btn btn-success" id="wizard">Wise Wizards</button>
    <button type="button" class="btn btn-info" id="dwarf">Hairy Dwarfs</button>
    <button type="button" class="btn btn-secondary" id="all">The Fellowship of the Ring</button>`;

  renderToDom("#theGreatBtn", domString);
};



// ****Form input****
const createNewMember = () => {

// Create randomizer//
const sortType = {
  id: fellowship.length + 1,
  imageUrl: document.querySelector("#imageUrl"),
  name: document.querySelector("#name").value,
  type: fellowshipTypes [Math.floor(Math.random() * 5)],
  orcArmy: false
};

 // Pushing new addition card
fellowship.push(sortType);
cardsOnDom(fellowship);
// const traitor = document.querySelector(".card");
traitor.addEventListener("click", (e) => {

  // Spliting the array to take traitors to the dark lords army
  if (e.target.id.includes("traitor")) {
   const [, id] = e.target.id.split("--");
   const index = fellowship.findIndex((e) => e.id === Number(id));
    fellowship.splice(index, 1);
   // let sArmy = sauronsArmy.splice(sauronsArmy.length, 0, ...fellow);
   
   }
   
 });
}; 


// Creating the events and query selector for form
const events = () => {
const form = document.querySelector("form");

      
  form.addEventListener("submit", (e) => {
    // keep form reset and prevent default together.
    // prevents the form from reseting the webpage.
    e.preventDefault();      
      createNewMember(e);
      fellowButtons();
      armyOnDom();
      form.reset();
      
  });
};





// Using filter to create new arrays for each traveler
const filter = (travelerType) => {
  const typeArray = [];

  // Adding filter for data
  fellowship.forEach((traveler) => {
    if (traveler.type === travelerType) {
      typeArray.push(traveler);
    }
    cardsOnDom(typeArray);
  });
};




// Button filters
const theGreatBtn = document.querySelector("#theGreatBtn");

 theGreatBtn.addEventListener("click", (e) => {
  if (e.target.id.includes("mortal")) {
    const filterMan = fellowship.filter((traveler) => traveler.type === "Mortal");
    console.log("Aragorn")
    cardsOnDom(filterMan);
  }
  else if (e.target.id.includes("elf")) {
    const filterElf = fellowship.filter((traveler) => traveler.type === "Elf");
    console.log("Legolas");
    cardsOnDom(filterElf);
  }
  else if (e.target.id.includes("hobbit")) {
    const filterHobbit = fellowship.filter((traveler) => traveler.type === "Hobbit");
    console.log("Master Frodo");
    cardsOnDom(filterHobbit);
  }
  else if (e.target.id.includes("wizard")) {
    const filterWizard = fellowship.filter((traveler) => traveler.type === "Wizard");
    console.log("FLY you fools! - Gandalf");
    cardsOnDom(filterWizard);
  }
  else if (e.target.id.includes("dwarf")) {
    const filterDwarf = fellowship.filter((traveler) => traveler.type === "Dwarf");
    console.log("Nobody tosses a dwarf - Gimli");
    cardsOnDom(filterDwarf);
  }
  else if (e.target.id.includes("all")) {
    console.log("The Fellowship")
    cardsOnDom(fellowship);
  }
});





//  Starting the App
const startApp = () => {
  events();
  evilEvents()
}

startApp();
