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
       petButton.append(btn);
    });
}

const showAllPet=()=>{
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res)=>res.json())
    .then((data)=>displayAllPet(data))
    .catch((error)=>console.log(error))
}

function displayAllPet(pets){
    const petContainer=document.getElementById("all-pet-container");
    
    pets.forEach(pet=>{
        const div=document.createElemen("div");
    })
}
adoptBestFriend();
showAllPet();