// Data of The Fellowship
const fellowship = [
  {
    id: 1,
    name: "Aragorn",
    type: "Man",
    orcArmy: false,
  },
  {
    id: 2,
    name: "Frodo Baggins",
    type: "Hobbit",
    orcArmy: false,
  },
  {
    id: 3,
    name: "Legolas",
    type: "Elf",
    orcArmy: false,
  },

  {
    id: 4,
    name: "Gimli",
    type: "Dwarf",
    orcArmy: false,
  },

  {
    id: 5,
    name: "Gandalf The Grey",
    type: "Wizard",
    orcArmy: false,
  },
];
// Orc Army Data
const urukHai = [
  {
    id: 0,
    name: "Azog",
    type: "Ork",
    orcArmy: true,
  },
];

// Saruman's Army array
const sarumansArmy = [];

// Code for rendering to DOM so HTML and JS can connect
const renderToDom = (divId, htmlToRender) => {
  const selectedDivID = document.querySelector(divId);
  selectedDivID.innerHTML = htmlToRender;
};

// forEach to loop through all the travelers
const cardsOnDom = (fellowship) => {
  let domString = "";
  fellowship.forEach((traveler) => {
    domString += `<div class="card" style="width: 18rem;">
       <div class="card-body">
         <h3 class="card-title">Name: ${traveler.name}</h3>
         <h5 class="card-subtitle mb-2 text-body-secondary">I am a/an: ${
           traveler.type}</h5>
         <p class="card-text">Are you an Orc by chance? ${
           traveler.orcArmy ? "I serve the Dark Lord" : "Sauron MUST be destroyed"}</p>
         <button class="btn btn-dark" id="delete--${traveler.id}--">Traitor!</button>
       </div>
     </div>`;
  });
  renderToDom("#app", domString);
};

// Using filter to create new arrays for each house
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



// Buttons to show after the initial
const fellowButtons = () => {
  domString = `<button type="button" class="btn btn-danger" id="man">Time of Man</button>
    <button type="button" class="btn btn-primary" id="elf">Time of the Elves</button>
    <button type="button" class="btn btn-warning" id="hobbit">Tricksy Hobbitses</button>
    <button type="button" class="btn btn-success" id="wizard">Wise Wizards</button>
    <button type="button" class="btn btn-info" id="dwarf">Hairy Dwarfs</button>
    <button type="button" class="btn btn-secondary" id="all">The Fellowship of the Ring</button>`;

  renderToDom("#theGreatBtn", domString);
};


// ****Starting the form by calling it from the document****
// const formContainer = document.querySelector('formContainer');

// `<div class="col-md-4">
//         <label for="validationCustom" id="hobbitForm">Who goes there? ${traveler.name}</label>
//         <input type="text" class="form-control" id="validationCustom" value="" required>
//       </div>
//       <div class="col-12">
//         <button type="submit" class="btn btn-info" id="sortHobbit" >Tell Me! </button>
//       </div>`;

// Function to pull element
const createNewFollower = (e) => {
  e.preventDefault();

  //  Adding a new card with values
  const createFellowObj = {
    id: fellowship.length + 1,
    name: document.querySelector("#name").value,
    type: document.querySelector("#type").value,
  };
  // Pushing new addition card
  fellowship.push(createFellowObj);
  cardsOnDom(fellowship);
  form.reset();
};
// submit button even listener for the createNewFollower card





// Event Listeners
//  Welcome button, form, and filter selectors
const advButton = document.querySelector("#advButton");
const hobbitForm = document.querySelector("form");
const theGreatBtn = document.querySelector("#theGreatBtn");
// const form = document.querySelector("form");


advButton.addEventListener("click", hobbitForm);


hobbitForm.addEventListener("submit", (e) => {
  createNewFollower(e);
  fellowButtons();
});

// form.addEventListener("submit", createNewFollower);
// const app = document.querySelector("#theFellowship");

theGreatBtn.addEventListener("click", (e) => {
  console.log("for the love CLICK!!!!!!")
  if (e.target.id.includes("man")) {
    const filterMan = fellowship.filter((traveler) => traveler.type === "man");
    cardsOnDom(filterMan);
  }
  if (e.target.id.includes("elf")) {
    const filterElf = fellowship.filter((traveler) => traveler.type === "elf");
    console.log("Legolas");
    cardsOnDom(filterElf);
  }
  if (e.target.id.includes("hobbit")) {
    const filterHobbit = fellowship.filter((traveler) => traveler.type === "hobbit");
    console.log("Master Frodo");
    cardsOnDom(filterHobbit);
  }
  if (e.target.id.includes("wizard")) {
    const filterWizard = fellowship.filter((traveler) => traveler.type === "wizard");
    console.log("FLY you fools!");
    cardsOnDom(filterWizard);
  }
  if (e.target.id.includes("dwarf")) {
    const filterDwarf = fellowship.filter((traveler) => traveler.type === "dwarf");
    console.log("Nobody tosses a dwarf");
    cardsOnDom(filterDwarf);
  }
  if (e.target.id.includes("all")) {
    cardsOnDom(fellowship);
  }
});

// addin event listener and checking if there's an exile button (aka delete)

app.addEventListener("click", (e) => {
  if (e.target.id.includes("delete")) {
    console.log("exiled");
  }
});
