
// Query Selectors
let navbar = document.querySelector('#navbar');
let links = document.querySelectorAll('.nav-link')
let logoNavbar = document.querySelector('#logoNavbar')
let lightsaber = document.querySelector(`#lightsaber`)
let collapse = document.querySelector('#collapse')

let check = false









window.addEventListener(`scroll`, ()=>{
    let scrolled = window.scrollY;

    if (scrolled > 0) {
        navbar.classList.remove('bg-black');
        navbar.classList.add('bg-yellow');
        navbar.style.height = '70px'
        collapse.classList.remove('bg-black');
        collapse.classList.add('bg-yellow');
        links.forEach((link)=> {
            link.style.color = 'var(--black)'
        });
        logoNavbar.src = './media/logo-b.png'

        lightsaber.src = './media/spada-b.png'
        
        
    } else{
        navbar.classList.add(`bg-black`)
        navbar.classList.remove(`bg-yellow`)
        navbar.style.height = '140px'
        collapse.classList.add(`bg-black`)
        collapse.classList.remove(`bg-yellow`)
       
        links.forEach((link)=>{
            link.style.color= 'var(--yellow)'
        })
        logoNavbar.src = './media/logo-y.png'

        lightsaber.src = './media/spada-y.png'


    }

    
})

lightsaber.addEventListener ('click', () =>{
    if (check == false){
    lightsaber.style.transform = 'rotate(-90deg)'
    check = true

    }else{
       lightsaber.style.transform = 'rotate(0deg)'
       check = false
    }

})



// Chiamate a sincrone: 
// setInterval (): crea un loop infinito in cui possimao gestire la durata delle singole iterazioni
// il setInterval è una funzione che vuole due parametri. Il primo parametro e la callback, il secondo e l'intervallo di tempo che deve passare tra le itterazioni 
//clearInterval(): mi permette di pulire un intervallo
// setTimeout() : Fa partire un blocco di istruzioni dopo tot secondi

let firstNumber = document.querySelector('#firstNumber')
let secondNumber = document.querySelector('#secondNumber')
let thirdNumber = document.querySelector('#thirdNumber')


let confirm = true


function createInterval( n, element, time) {

let counter = 0

let interval = setInterval( ()=>{
    if (counter < n) {
        counter++;
        element.innerHTML = counter
        
    } else{
        console.log(`adesso mi fermo`);
        clearInterval(interval);

        
    }


}, time);
setTimeout( () => {
    confirm = true
}, 8000);

}





//IntersectionObserver: è una Classe del browser che si occupa di far scattare una funzione nel monmento in cui sul browser sono visibili gli elementi HTML che noi gli indichiamo

// new: Keyworrd che mi permette di generare un oggetto partendo da una Classe

//nella variabile stiamo creando un oggetto di classe IntersectionObserver

// in questo oggetto scatta una callback la quale accetta un qualsisi numero di variabili e li salva nel parametro formale entries che e un array 



let observer = new IntersectionObserver( (entries)=>{

    entries.forEach((entry)=> {

        if(entry.isIntersecting && confirm){
            createInterval(100, firstNumber, 100);
            createInterval(200, secondNumber, 50);
            createInterval(300, thirdNumber, 25);
            confirm = false;
        }
    })

})

observer.observe(firstNumber)

let reviews = [
    { user: "Matteo", description: " Stupendo ", rank: 5 },
    { user: "Vincenzo", description: "veramente bel sito", rank: 4 },
    { user: "Roberta", description: "Mi piace tranne per Star Trek", rank: 3 },
    { user: "Marco", description: "Bella merda", rank: 2 },
    { user: "Valerio", description: "Orribile", rank: 1 },


];

let swiperWrapper = document.querySelector(".swiper-wrapper");

reviews.forEach((recensione) => {
    let div = document.createElement("div");
    div.classList.add("swiper-slide");

    div.innerHTML = `
        <div class="card-review">
                    <p class="lead text-center">${recensione.description}</p>
                    <p class="h4 text-center">${recensione.user}</p>
                    <div class="d-flex justify-content-center star">
                    </div>
        </div>

                 
    `;

    swiperWrapper.appendChild(div);


});

let stars= document.querySelectorAll('.star')
// <i class="fa-solid fa-star"></i>

// <i class="fa-regular fa-star"></i>

stars.forEach((star, index) => {
  for (let i = 0; i < reviews[index].rank; i++) {
    let icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-star");
    star.appendChild(icon);
  }
  let difference = 5 - reviews[index].rank
  for (let i = 1; i <= difference; i++) {
    let icon = document.createElement("i");
    icon.classList.add("fa-regular", "fa-star");
    star.appendChild(icon);
  }

});



// Swiper

const swiper = new Swiper('.swiper', {
  // Optional parameters
    effect: "flip",
    
    grabCursor: true,
    loop: true,
autoplay: {
        delay: 2500,
},
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});