// Data of The Fellowship
const fellowship = [
  {
  id: 1,
  name: "Aragorn",
  type: "Man",  
  orcArmy: false
  
  },
  {

  id: 2,
  name: "Frodo Baggins",
  type: "Hobbit",  
  orcArmy: false
  
  },
  {
  id: 3,
  name: "Legolas",
  type: "Elf", 
  orcArmy: false
  
  
  },
  
  {
  id: 4,
  name:"Gimli",
  type: "Dwarf",   
  orcArmy: false
  
  },
 
  {
    id: 5,
    name:"Gandalf The Grey",
    type: "Wizard",    
    orcArmy: false
    
  },


];
// Orc Army Data
const urukHai = [
  {
    id: 0,
    name:"Azog",
    type: "Ork",     
    orcArmy: true
    
  },
]


// Saruman's Army array
const sarumanArmy = [];

// Code for rendering to DOM so HTML and JS can connect
const renderToDom = (divId, htmlToRender) => {
  const selectedDivID = document.querySelector(divId);
  selectedDivID.innerHTML = htmlToRender;
}

// forEach to loop through all the travelers
const cardsOnDom = (array) => {
  domString =""
  array.forEach(traveler => {
    `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h3 class="card-title">Name: ${traveler.name}</h3>
        <h5 class="card-subtitle mb-2 text-body-secondary">I am a/an: ${traveler.type}</h5>
        <p class="card-text">Are you an Orc by chance? ${traveler.orcArmy ? "I serve the Dark Lord" : "Sauron MUST be destroyed"}</p>
        <button class="btn btn-dark" id="delete--${traveler.id}--">Cast Into Exile</button>
      </div>
    </div>`;
  })  

}
renderToDom("#app", divId);

cardsOnDom(fellowship)




const showManButton = document.querySelector("#man");
const showElfButton = document.querySelector("#elf");
const showHobbitButton = document.querySelector("#hobbit");
const showWizardButton = document.querySelector("#wizard"); 
const showDwarfButton = document.querySelector("#dwarf");
const showAllButton = document.querySelector("#all");



showAllButton.addeventlistener("click", (e) => {
  cardsOnDom(fellowship)
});

showManButton.addeventlistener("click", (e) => {
  filter("man")
  console.log(filter("man"))
});

showElfButton.addeventlistener("click", (e) => {
  filter("elf")
});

showHobbitButton.addeventlistener("click", (e) =>{
  filter("hobbit")
});

showWizardButton.addeventlistener("click", (e) => {
  filter("wizard")
});

showDwarfButton.addeventlistener("click", (e) => {
  filter("dwarf")
})
