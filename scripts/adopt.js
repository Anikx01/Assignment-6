const adoptBestFriend = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
        .then((res) => res.json())
        .then((data) => showAllButtons(data.categories)) // Fixed typo here (.then instead of .thenn)
        .catch((error) => console.log(error)); // Fixed typo here (console.log instead of consolo.log)
};
function showAllButtons(categories) {
    // console.log(pets);
    
   
    categories.forEach(category => {
        const  petButton=document.getElementById("button-container");
       const btn=document.createElement("button");
       btn.classList="btn bg-white";
       btn.innerHTML=`
       <img  class="w-1/6" src=${category.category_icon} />
       <p class="font-bold text-black">${category.category}</p>
       `
       btn.addEventListener("click", () => {
          showPetCategory(category.category);
        const petContainer=document.getElementById("all-pet-container");
     petContainer.innerHTML = "";
       
    });
       petButton.append(btn);
    });
}


const showAllPet=()=>{
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res)=>res.json())
    .then((data)=>displayAllPet(data.pets))
    .catch((error)=>console.log(error))
}

function displayAllPet(pets){
    const petContainer=document.getElementById("all-pet-container");
    
    pets.forEach(pet=>{
        const card=document.createElement("div");
        card.classList=""
        card.innerHTML=`
        <div class="card p-4 bg-base-100 w-88 shadow-xl">
  <figure>
    <img class="object-cover"
      src="${pet.image}"
      alt="Shoes" />
  </figure>
  <div class="">
    <h2 class="card-title mt-2 font-bold  text-black text-xl">
      ${pet.pet_name}
     
    </h2>
    <p><i class="fa-solid fa-table-cells-large"></i> Breed: ${pet.breed}</p>
    <p><i class="fa-regular fa-calendar"></i> Birth:${pet.date_of_birth}</p>
    <p><i class="fa-solid fa-mercury"></i> Gender: ${pet.gender}</p>
    <p><i class="fa-solid fa-dollar-sign"></i> Price : ${pet.price}</p>
    
    <div class="flex justify-between">
    <div class=""><button onclick="addImage('${pet.petId}')" class="btn"><i class="fa-regular fa-thumbs-up"></i></button></div>
    <div class=""><button class="btn">Adopt</button></div>
    <div><button class="btn">Details</button></div>
    </div>
  </div>
</div> `
        petContainer.append(card);
    })
}

const showPetCategory=(category)=>{
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
    .then((res)=>res.json())
    .then((data)=>displayPetCategory(data.data))
    .catch((error)=>console.log(error))
}

function displayPetCategory(pets){
    const allPetContainer=document.getElementById("all-pet-container")
    // allPetContainer.style.display=none;
    const petCategoryContainer=document.getElementById("pet-category-container");
    if(pets.length==0){
        
            const card=document.createElement("div");
        card.classList=""
        card.innerHTML=`
        <h2 class="font-bold text-xl text-center">No Pet Available</h2>
        `
        allPetContainer.append(card);
        
    }
    
    else{
    allPetContainer.innerHTML="";
    pets.forEach(pet=>{
      
        
        const card=document.createElement("div");
        card.classList="loader"
        card.innerHTML=`
        <div class="card p-4 bg-base-100 w-88 shadow-xl">
  <figure>
    <img class="object-cover"
      src="${pet.image}"
      alt="Shoes" />
  </figure>
  <div class="">
    <h2 class="card-title mt-2 font-bold  text-black text-xl">
      ${pet.pet_name}
     
    </h2>
    <p><i class="fa-solid fa-table-cells-large"></i> Breed: ${pet.breed}</p>
    <p><i class="fa-regular fa-calendar"></i> Birth:${pet.date_of_birth}</p>
    <p><i class="fa-solid fa-mercury"></i> Gender: ${pet.gender}</p>
    <p><i class="fa-solid fa-dollar-sign"></i> Price : ${pet.price}</p>
    
    <div class="flex justify-between">
    <div class=""><button onclick="addImage('${pet.petId}')" class="btn"><i class="fa-regular fa-thumbs-up"></i></button></div>
    <div class=""><button class="btn">Adopt</button></div>
    <div><button class="btn">Details</button></div>
    </div>
  </div>
</div> `
        allPetContainer.append(card);
    })
    }
}

const addImage=(id)=>{
  fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
  .then((res)=>res.json())
  .then((data)=>addPetImage(data.petData))
  .catch((error)=>console.log(error))
}


function addPetImage(petData){
  const imgDiv = document.getElementById("pet-img-container");



  // Ensure petData is an object
   
  // Create a div for the pet image
  const div = document.createElement("div");
  div.classList = "border border-green-500 mt-0";
  div.innerHTML = `
    <img src="${petData.image}" alt="${petData.pet_name}" />
  `;
  imgDiv.append(div);

}

adoptBestFriend();
showAllPet();
showPetCategory();