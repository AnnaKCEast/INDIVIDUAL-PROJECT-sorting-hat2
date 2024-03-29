// Code for rendering to DOM so HTML and JS can connect
const renderToDom = (divId, htmlToRender) => {
  const selectedDivID = document.querySelector(divId);
  // console.log(selectedDivID)
  // console.log(htmlToRender)
  selectedDivID.innerHTML = htmlToRender;
};

// Data of The Fellowship
const fellowship = [
  {
    id: 1,
    name: "Aragorn",
    type: "Mortal",
    orcArmy: false,
    imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4c3f7d91-c94a-4004-9839-5c41f6ba3957/dg49kit-e035331b-9725-4387-9467-472fce8e06db.jpg/v1/fill/w_1280,h_1696,q_75,strp/aragorn_part_01__into_the_dark_forest_by_mheamindesign_dg49kit-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTY5NiIsInBhdGgiOiJcL2ZcLzRjM2Y3ZDkxLWM5NGEtNDAwNC05ODM5LTVjNDFmNmJhMzk1N1wvZGc0OWtpdC1lMDM1MzMxYi05NzI1LTQzODctOTQ2Ny00NzJmY2U4ZTA2ZGIuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.MygzHMrShUsjmWxZH9dZE63-XgE3D9fJe4kZWomFjJ4"
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
    imageUrl: "https://figround.com/assets/img/2019-12-28-the-lord-of-the-rings-gimli/001.jpg"
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
const enemyArmy = [{
    id: 6,
    name: "Lurtz",
    type: "Orc",
    orcArmy: true,
    imageUrl:"https://static.wikia.nocookie.net/lotr/images/4/4e/Lord_of_the_rings_Lurtz.jpg/revision/latest/scale-to-width-down/250?cb=20131107182402"
  },
];

// Saruman's Army array
// const sarumansArmy = []

// Types of the fellowship to sort into
const fellowshipTypes = ["Mortal", "Elf", "Hobbit", "Wizard", "Dwarf" ]


// need a function for form on dom 
// call rendertodom using the domstring the hobbitForm divId 
const formOnDom = () => {
  const domString = `
  <input id="name" type="text" aria-label="name" required> 
  <button class="btn btn-success" id="formBtn" type="submit">Start your journey!!</button>`;
renderToDom("#hobbitForm", domString);
};

// forEach to loop through all the travelers
const cardsOnDom = () => {
  let domString = "";
  console.log("Current fellowship:");
  console.log(fellowship);
  //fellowship.sort
  if (typeof fellowshipFilter !== 'undefined'){
    fellowshipFilter.forEach((traveler) => {
      domString += `<div class="card" style="width: 18rem;">
      <div class="d-flex justify-content-start">...
         <div class="card-body">
         <img src="${traveler.imageUrl}" class="card-img-top"> 
           <h3 class="card-title">Name: ${traveler.name}</h3>
           <h5 class="card-subtitle mb-2 text-body-secondary">I am a/an: ${traveler.type}</h5>
           <p class="card-text">Are you an Orc? ${traveler.orcArmy ? "Indeed, I serve the Dark Lord" : "No! I want the ring destroyed"}</p>
           <button class="btn btn-dark" class="buttonId" id="ToTraitor--${traveler.id}">"Traitor!"</button>
          </div>
         </div>
       </div>`;
    });
  } else {
  fellowship.forEach((traveler) => {
    domString += `<div class="card" style="width: 18rem;">
    <div class="d-flex justify-content-start">...
       <div class="card-body" id="newCard">
       <!-- <img src="$https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/501348UL/the-fellowship-of-the-ring_the-lord-of-the-rings_silo.png" class="card-img-top"> -->
         <h3 class="card-title">Name: ${traveler.name}</h3>
         <h5 class="card-subtitle mb-2 text-body-secondary">I am a/an: ${traveler.type}</h5>
         <p class="card-text">Are you an Orc? ${traveler.orcArmy ? "Indeed, I serve the Dark Lord" : "No! I want the ring destroyed"}</p>
         <button class="btn btn-dark" class="buttonId" id="ToTraitor--${traveler.id}">"Traitor!"</button>
        </div>
       </div>
     </div>`;
  });
  };
  renderToDom("#theFellowship", domString);
};


// Sauron's Army on Dom caller
const armyOnDom = () => {
  let domString = "";
  enemyArmy.forEach(() => {
    domString += `<div class="card" style="width: 18rem;">
      <div class="card-body" id:traitorCard>
      <img src="https://preview.redd.it/what-makes-the-dark-lord-sauron-stand-out-amongst-fictional-v0-7lkp7sxb7bqb1.jpg?auto=webp&s=e8833d4c1a66326f91a57512e1aef7f9bf36f71f" class="card-img-top">
      <h3 class="card-title">OH NO! You betrayed the followship and joined Sauron's Army. Jerk. </h3>
      </div>
    </div>`;
  });
  renderToDom("#sauronsArmy", domString);
  //cardsOnDom("#sauronsArmy", domString)
}

// Buttons to show after the initial
const fellowButtons = () => {
  let domString = `<button type="button" class="btn btn-danger" id="mortal">Mortals</button>
    <button type="button" class="btn btn-primary" id="elf">Elves</button>
    <button type="button" class="btn btn-warning" id="hobbit">Hobbitses</button>
    <button type="button" class="btn btn-success" id="wizard">Wizards</button>
    <button type="button" class="btn btn-info" id="dwarf">Dwarfs</button>
    <button type="button" class="btn btn-secondary" id="all">The Fellowship of the Ring</button>`;

  renderToDom("#theGreatBtn", domString);
};

// Need to query select button to HTML and have event listener for that click for formBtn ID on the form itself
const sortBtn = document.querySelector("#formBtn")
sortBtn.addEventListener("click", formOnDom) 


// ****Form input****
const createNewMember = () => {

// Create randomizer//
const sortType = {
  id: fellowship.length + 1,
  imageUrl: "https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/501348UL/the-fellowship-of-the-ring_the-lord-of-the-rings_silo.png",
  name: document.querySelector("#name").value,
  type: fellowshipTypes [Math.floor(Math.random() * 5)],
  orcArmy: false
};

 // Pushing new addition card
fellowship.push(sortType);
cardsOnDom(fellowship);
};


// Creating the events and query selector for form
const events = () => {
const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    // keep form reset and prevent default together.
    // prevents the form from reseting the webpage.
    e.preventDefault();      
      createNewMember(e);
      //TraitorID = 3; // try to set one fellow to be eliminated for testing
      fellowButtons();
      //armyOnDom();
      form.reset();
      
  });

// event listener for individual cards
const theFellowshipAll = document.querySelectorAll("#theFellowship");
console.log("Number of buttons found", theFellowshipAll.length);
//Array.from(theFellowshipAll).forEach( theF => theF.addEventListener("click", (e) => {
  theFellowshipAll.forEach( theF => theF.addEventListener("click", (e) => {
  //TODO get ID off traveler
  // TODO const travelerId
  // TODO includes ('--${travelerId}'
  console.log("Target ID: ",e.target.id);
    // Spliting the array to take traitors to the dark lords army
    const [, id] = e.target.id.split("--");
    const travelerId = fellowship.findIndex((e) => e.id === Number(id));
    //  const travel = fellowship.index((b) => b.id === Number(id));
    console.log("travelerId", travelerId);

    
      // fellowship.splice(index, 1);
    //enemyArmy.push(...fellowship.splice(travelerId, 1));
    console.log("Enemy Army length before push ",enemyArmy.length);
    enemyArmy.push(fellowship[travelerId]);
    console.log("Enemy Army length after push ",enemyArmy.length);

    //console.log("Fellowship length before splice ",fellowship.length);
    fellowship.splice(travelerId,1);
    //console.log("Fellowship length after splice ",fellowship.length);
    //console.log(enemyArmy.toString);
    //console.log(fellowship.toString);
    
    cardsOnDom(fellowship);
    armyOnDom(enemyArmy);
    console.log("Traitor!");
    //}
  }));
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
    //const filterMan = fellowship.filter((traveler) => traveler.type === "Mortal");
    fellowshipFilter = fellowship.filter((traveler) => traveler.type === "Mortal");
    console.log("Aragorn");
    cardsOnDom();
  }
  else if (e.target.id.includes("elf")) {
    //const filterElf = fellowship.filter((traveler) => traveler.type === "Elf");
    fellowshipFilter = fellowship.filter((traveler) => traveler.type === "Elf");
    console.log("Legolas");
    cardsOnDom();
  }
  else if (e.target.id.includes("hobbit")) {
    //const filterHobbit = fellowship.filter((traveler) => traveler.type === "Hobbit");
    fellowshipFilter = fellowship.filter((traveler) => traveler.type === "Hobbit");
    console.log("Master Frodo");
    cardsOnDom();
  }
  else if (e.target.id.includes("wizard")) {
    //const filterWizard = fellowship.filter((traveler) => traveler.type === "Wizard");
    fellowshipFilter = fellowship.filter((traveler) => traveler.type === "Wizard");
    console.log("FLY you fools! - Gandalf");
    cardsOnDom();
  }
  else if (e.target.id.includes("dwarf")) {
    //const filterDwarf = fellowship.filter((traveler) => traveler.type === "Dwarf");
    fellowshipFilter = fellowship.filter((traveler) => traveler.type === "Dwarf");
    console.log("Nobody tosses a dwarf - Gimli");
    cardsOnDom();
  }
  else if (e.target.id.includes("all")) {
    if (typeof fellowshipFilter !== 'undefined'){
      delete(fellowshipFilter);
    };
    console.log("The Fellowship");
    cardsOnDom(fellowship);
  }
});





//  Starting the App
const startApp = () => {
  events();
}

startApp();
