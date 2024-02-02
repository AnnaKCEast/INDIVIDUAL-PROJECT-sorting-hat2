const renderToDom = (divId, htmlToRender) => {
  const selectedDivID = document.querySelector(divId);
  selectedDivID.innerHTML = htmlToRender;
};
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
// const sarumansArmy = [];

// Code for rendering to DOM so HTML and JS can connect



// forEach to loop through all the travelers
const cardsOnDom = (fellowship) => {
  let domString = "";
  fellowship.forEach((traveler) => {
    domString += `<div class="card" style="width: 18rem;">
       <div class="card-body">
         <h3 class="card-title">Name: ${traveler.name}</h3>
         <h5 class="card-subtitle mb-2 text-body-secondary">I am a/an: ${
           traveler.type}</h5>
         <p class="card-text">Are you an Orc? ${
           traveler.orcArmy ? "I serve the Dark Lord" : "Sauron MUST be destroyed"}</p>
         <button class="btn btn-dark" id="delete--${traveler.id}--">Traitor!</button>
       </div>
     </div>`;
  });
  renderToDom("#theFellowship", domString);
};

const armyOnDom = (urukHai) => {
  let domString = "";
  orcArmy.forEach((orc) => {
    domString += `<div class="card" style="width: 18rem;">
      <div class="card-body">
      <h3 class="card-title">Name ${orc.name}</h3>
      <p class="card-text">Are you an Orc? ${
        orc.orcArmy ? "I serve the Dark Lord" : "Sauron MUST be destroyed"}</p>
      </div>
    </div>`
  })
  renderToDom ("#sauronArmy", domString)
}


const hobbitForm = document.querySelector("#hobbitForm");
// ****Starting the form by calling it from the document****
const createNewMember = (e) => {
  e.preventDefault();

  const createFellowObj = {
    id: fellowship.length + 1,
    name: document.querySelector("#name").value,
    type: type [Math.floor(Math.random() * type.length)],
    id: Math.floor(Math.random() * 100) +1
  };
      hobbitForm.addEventListener("submit", (e) => {       
    createNewMember(e);
    fellowButtons();
    renderToDom ("#app", domString)
});
  // Pushing new addition card
  fellowship.push(createFellowObj);
  console.log("CLICK")
    cardsOnDom(fellowship);
    hobbitForm.reset();
  }  


// Using filter to create new arrays for each house
// const filter = (travelerType) => {
//   const typeArray = [];

//   // Adding filter for data
//   fellowship.forEach((traveler) => {
//     if (traveler.type === travelerType) {
//       typeArray.push(traveler);
//     }
//     cardsOnDom(typeArray);
//   });
// };



// Buttons to show after the initial
// const fellowButtons = () => {
//   let domString = `<button type="button" class="btn btn-danger" id="man">Time of Man</button>
//     <button type="button" class="btn btn-primary" id="elf">Time of the Elves</button>
//     <button type="button" class="btn btn-warning" id="hobbit">Tricksy Hobbitses</button>
//     <button type="button" class="btn btn-success" id="wizard">Wise Wizards</button>
//     <button type="button" class="btn btn-info" id="dwarf">Hairy Dwarfs</button>
//     <button type="button" class="btn btn-secondary" id="all">The Fellowship of the Ring</button>`;

//   renderToDom("#theGreatBtn", domString);
// };

// const theGreatBtn = document.querySelector("#theGreatBtn");


//  theGreatBtn.addEventListener("click", (e) => {
//   console.log("for the love CLICK!!!!!!")
//   if (e.target.id.includes("man")) {
//     const filterMan = fellowship.filter((traveler) => traveler.type === "man");
//     cardsOnDom(filterMan);
//   }
//   else if (e.target.id.includes("elf")) {
//     const filterElf = fellowship.filter((traveler) => traveler.type === "elf");
//     console.log("Legolas");
//     cardsOnDom(filterElf);
//   }
//   else if (e.target.id.includes("hobbit")) {
//     const filterHobbit = fellowship.filter((traveler) => traveler.type === "hobbit");
//     console.log("Master Frodo");
//     cardsOnDom(filterHobbit);
//   }
//   else if (e.target.id.includes("wizard")) {
//     const filterWizard = fellowship.filter((traveler) => traveler.type === "wizard");
//     console.log("FLY you fools!");
//     cardsOnDom(filterWizard);
//   }
//   else if (e.target.id.includes("dwarf")) {
//     const filterDwarf = fellowship.filter((traveler) => traveler.type === "dwarf");
//     console.log("Nobody tosses a dwarf");
//     cardsOnDom(filterDwarf);
//   }
//   else if (e.target.id.includes("all")) {
//     cardsOnDom(fellowship);
//   }
// });

// addin event listener and checking if there's an exile button (aka delete)

// app.addEventListener("click", (e) => {
//   if (e.target.id.includes("delete")) {
//     console.log("exiled");
//   }
// });


// Attempting to splice the cards into new arrays for the orc army
// const app = document.querySelector("#sauronArmy")
// app.addEventListener("click" (e) => {
//   if (e.target.id.includes("#orcArmy"))
//   console.log("In the army now")
// })

//  Destruct the array
