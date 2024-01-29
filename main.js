filterArmy = false

const previousStudent = [
  {
  id: 1,
  name: "Luna Lovegood",
  house: "Ravenclaw",
  voldArmy: false,
  },
  {

  id: 2,
  name: "Cedric Diggory",
  house: "Hufflepuff",
  voldArmy: false,
  },
  {
  id: 3,
  name: "Harry Potter",
  house: "Griffindor",
  voldArmy: false,
  },
  {
  id: 4,
  name: "Dolores Umbridge",
  house:"Slytherin",
  voldArmy: true,
  },
  {
  id: 5,
  name:"Albus Potter",
  house: "Slytherin",
  voldArmy: false,
  },
  {
    id: 6,
    name: "Belleatrix Lestrange",
    house: "Slytherin",
    voldArmy: true,
  },
  {
    id: 7,
    name: "Lucius Mallfoy",
    house: "Slytherin",
    voldArmy: true
  }
];




const button = document.querySelector('#sortStudent').addEventListener('click', buttonFilter);


const cardsOnDom = (array) => {
  let domString = "";
  for (const previous of array) {
    domstring += <div class="card" style="width: 18rem;">
    <div class="card-body">
      <p class="card-text">Name: ${previous.name}</p>
      <p class="card-text">House: ${previous.house}</p>
      <p class="card-text"> Are with Voldemort? ${previous.voldArmy ? "I bow to him" : "He must be defeated!"} </p>
     </div>
    </div>
  }
}
const filter = (houseString) => {
  filterArmy = true; 
  const houseArray =[];

  for (const student of previousStudent) {
    if (student.house === houseString) {
      houseArray.push(student);
    }
  }
  cardsOnDom (houseArray)
}








// Code for the app to initialize
